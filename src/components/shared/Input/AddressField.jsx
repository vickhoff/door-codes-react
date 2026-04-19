import autoComplete from "../../../api/address"
import styles from "./Input.module.css"
import { useState, useRef } from "react"
import { TextField } from "./TextField"
import SkeletonAddress from "./SkeletonAddress/SkeletonAddress"

export function AddressField({label, error, id, required, disabled, ...rest}) {
    
    const [addresses, setAddresses] = useState({ suggestions: [] })
    const [inputValue, setInputValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    // REVIEW: The debounce timeout is never cleared on unmount. If the component
    // unmounts before the timer fires, it will try to call setAddresses / setIsOpen
    // on an unmounted component. Add a useEffect cleanup: return () => clearTimeout(debounceTimer.current)
    const debounceTimer = useRef(null)

    function handleInputChange(e) {
        const value = e.target.value
        setInputValue(value)

        if (!value.trim() || value.length <= 2) {
            setAddresses({ suggestions: [] })
            setIsOpen(false)
            return
        }

        clearTimeout(debounceTimer.current)
        debounceTimer.current = setTimeout(async () => {
            try {
                setIsLoading(true)
                setIsOpen(true)
                const addresses = await autoComplete(value)
                const suggestions = addresses.suggestions ?? []
                setAddresses({ suggestions })
                if (suggestions.length === 0) setIsOpen(false)
            } catch {
                setIsOpen(false)
                setAddresses({ suggestions: [] })
            } finally {
                setIsLoading(false)
            }
        }, 300)
    }

    function handleAddressClick(place) {
        setInputValue(`${place.placePrediction?.structuredFormat?.mainText?.text}, ${place.placePrediction?.structuredFormat?.secondaryText?.text}`)
        setAddresses({ suggestions: [] })
        setIsOpen(false)
    }

    return (
        {/* REVIEW: Missing space between `role="combobox"` and `className` — this works
            but is a formatting issue that linters should catch. */}
        {/* REVIEW: `aria-expanded` on line 52 is placed on the <ul role="listbox"> but per
            WAI-ARIA the `aria-expanded` attribute belongs on the combobox element (this div),
            not on the listbox. Move it here. */}
        <div role="combobox"className={styles.addressField}>
            <TextField label={label} data-1p-ignore error={error} id={id} required={required} disabled={disabled} value={inputValue} onChange={(e) => handleInputChange(e)} {...rest} />
            <ul role="listbox" aria-expanded={inputValue.length > 2} className={`${styles.addressList} ${isOpen ? styles.visible : ""}`}>
                {
                    isLoading ? <SkeletonAddress /> : 
                    addresses.suggestions.map(place => (
                        <li role="option" key={place.placePrediction.placeId}>
                            {/* REVIEW: This <button> has no `type="button"`, so it defaults
                                to `type="submit"`. When inside a <form>, clicking an address
                                suggestion will submit the form instead of selecting the address.
                                Add `type="button"` to prevent this. */}
                            <button className={styles.addressButton} onClick={() => handleAddressClick(place)}>
                                <p>{place.placePrediction?.structuredFormat?.mainText?.text}</p>
                                <p className="small">{place.placePrediction?.structuredFormat?.secondaryText?.text}</p>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default AddressField