import Modal from "../../shared/Modal/Modal"
import Form from "../../shared/Form/Form"
import { TextField } from "../../shared/Input/TextField"
import { useState } from "react"
import { useUser } from "../../../context/UserContext"


function AddModal({onClose}) {

    const { addCodeItem } = useUser()

    const [errors, setErrors] = useState({
        name: null,
        code: null,
        address: null
    })
    const [addIsLoading, setAddIsLoading] = useState(true) 

    async function handleAddForm(codeData) {
        const formData = Object.fromEntries(codeData)
 
        try {
            await addCodeItem(formData)
            onClose()
        } catch(error) {
            console.error(error)
        } finally {
            setAddIsLoading(false)
        }
    }

    const formContent = [
        { component: TextField, autoFocus: true, label: "Code title", placeholder:"My friends place", name: "name", required:true, id: "input-title", error: errors.name},
        { component: TextField, label: "Address", placeholder:"My friends address", name: "address", required: true, id: "input-address", error: errors.address},
        { component: TextField, label: "Code", placeholder:"The door code", name: "code", required: true, id: "input-", error: errors.code}
    ]

    const buttons = [
        {variant: "ghost", text: "Cancel", onClick: onClose},
        {variant: "primary", text: "Add code"}
    ]
    
    return (
        <Modal 
            title={"Add code"}
            onClose={onClose}
        >

            <Form 
                fields={formContent} 
                handleSubmit={handleAddForm} 
                buttons={buttons}
            />
        </Modal>
    )
}

export default AddModal
