import autoComplete from "../../../api/address"
import styles from "./Input.module.css"
import { useState } from "react"
import { TextField } from "./TextField"

export function AddressField({label, error, id, required, disabled, ...rest}) {
    
    const [addresses, setAddresses] = useState({ suggestions: [] })
    const [inputValue, setInputValue] = useState("")

    async function handleInputChange(e) {
        const value = e.target.value     
        setInputValue(value)

        if (!value.trim()) {
            setAddresses({ suggestions: [] })
            return                           
        }
        if (value.length > 2) {
            const addresses = await autoComplete(value)     
            setAddresses(addresses)
            console.log("addresses", addresses)
        }
    }

    return (
        <div className={styles.addressField}>
            <TextField label={label} error={error} id={id} required={required} disabled={disabled} onChange={(e) => handleInputChange(e)} {...rest} />
            {addresses.suggestions.length > 0 && (
            <ul className={styles.addressList}>
                {addresses.suggestions.map(place => (
                    <li key={place.placePrediction.placeId}>
                        <button key={place.placePrediction.placeId} className={styles.addressButton} onClick={() => handleAddressClick(place)}>
                            <p>{place.placePrediction?.structuredFormat?.mainText?.text}</p>
                            <p>{place.placePrediction?.structuredFormat?.secondaryText?.text}</p>
                        </button>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )

}

export default AddressField