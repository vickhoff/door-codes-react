import { autoComplete, latLong }  from "../../../api/address"
import styles from "./Input.module.css"
import { useState, useRef, useEffect } from "react"
import { TextField } from "./TextField"
import SkeletonAddress from "./SkeletonAddress/SkeletonAddress"

export function AddressField({label, error, id, required, disabled, defaultValue, onAddressSelect, ...rest}) {

    const [addresses, setAddresses] = useState({ suggestions: [] })
    const [inputValue, setInputValue] = useState(defaultValue ?? "")
    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const debounceTimer = useRef(null)

    useEffect(() => {
        console.log("defaultValue changed:", defaultValue)
        if (defaultValue) setInputValue(defaultValue)
    }, [defaultValue])

    useEffect(() => {                                                              
        return () => clearTimeout(debounceTimer.current)
    }, []) 

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
    async function handleAddressClick(place) {                                                                                                     
        const text = `${place.placePrediction?.structuredFormat?.mainText?.text}, ${place.placePrediction?.structuredFormat?.secondaryText?.text}` 
        setInputValue(text)                                                                                                                        
        setAddresses({ suggestions: [] })                                                                                                          
        setIsOpen(false)                                                                                                                           
                                                                                                                                                   
        const result = await latLong(place.placePrediction?.placeId)                                                                               
        onAddressSelect({ text, lat: result.location.latitude, long: result.location.longitude })                                                
    }

    return (

        <div role="combobox" aria-expanded={inputValue.length > 2} className={styles.addressField}>
            <TextField label={label} data-1p-ignore error={error} id={id} required={required} disabled={disabled} value={inputValue} onChange={(e) => handleInputChange(e)} {...rest} />
            <ul role="listbox"  className={`${styles.addressList} ${isOpen ? styles.visible : ""}`}>
                {
                    isLoading ? <SkeletonAddress /> : 
                    addresses.suggestions.map(place => (
                        <li role="option" key={place.placePrediction.placeId}>
                            <button type="button" className={styles.addressButton} onClick={() => handleAddressClick(place)}>
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