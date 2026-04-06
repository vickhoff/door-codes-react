import autoComplete from "../../../api/address"
import styles from "./Input.module.css"
import { useState } from "react"
import { TextField } from "./TextField"
import SkeletonAddress from "./SkeletonAddress/SkeletonAddress"

export function AddressField({label, error, id, required, disabled, ...rest}) {
    
    const [addresses, setAddresses] = useState({ suggestions: [] })
    const [inputValue, setInputValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    async function handleInputChange(e) {
        const value = e.target.value
        setInputValue(value)

        if (!value.trim()) {
            setAddresses({ suggestions: [] })
            return
        }
        if (value.length > 2) {
            setIsLoading(true)
            const addresses = await autoComplete(value)
            setAddresses({ suggestions: addresses.suggestions ?? [] })
            setIsLoading(false)
            console.log("addresses", addresses)
        }
    }

    function handleAddressClick(place) {
        setInputValue(`${place.placePrediction?.structuredFormat?.mainText?.text}, ${place.placePrediction?.structuredFormat?.secondaryText?.text}`)
        setAddresses({ suggestions: [] })
    }

    return (
        <div role="combobox"className={styles.addressField}>
            <TextField label={label} data-1p-ignore error={error} id={id} required={required} disabled={disabled} value={inputValue} onChange={(e) => handleInputChange(e)} {...rest} />
            <ul role="listbox" aria-expanded={inputValue.length > 2} className={`${styles.addressList} ${inputValue.length > 2 ? styles.visible : ""}`}>
                {
                    isLoading ? <SkeletonAddress /> : 
                    addresses.suggestions.map(place => (
                        <li role="option" key={place.placePrediction.placeId}>
                            <button className={styles.addressButton} onClick={() => handleAddressClick(place)}>
                                <p>{place.placePrediction?.structuredFormat?.mainText?.text}</p>
                                <p>{place.placePrediction?.structuredFormat?.secondaryText?.text}</p>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default AddressField