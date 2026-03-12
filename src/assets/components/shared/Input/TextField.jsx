

export function TextField({label, defaultValue, type = "text", id, name, placeholder, autocomplete}) {

    
    return (
        <>
           {label && <label htmlFor={id}>{label}</label>}
            <input type={type} defaultValue={defaultValue} id={id} name={name} placeholder={placeholder} autoComplete={autocomplete}
             />
        </>
    )

}