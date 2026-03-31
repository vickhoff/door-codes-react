import Modal from "../../shared/Modal/Modal"
import Form from "../../shared/Form/Form"
import { TextField } from "../../shared/Input/TextField"
import { useState } from "react"
import { useFetchAPI } from "../../../hooks/useFetchAPI"
import Spinner from "../../shared/Spinner/Spinner"
import { useUser } from "../../../context/UserContext"

function EditModal({onClose, id}) {
    
    const{updateCodeItem, deleteCodeItem} = useUser()
    const { data: code, isLoading: codeIsLoading } = useFetchAPI(`/api/items/${id}`, null)
    const[isLoadingUpdate, setIsLoadingUpdate] = useState(false)
    const[isLoadingDelete, setIsLoadingDelete] = useState(false)

    const [errors, setErrors] = useState({
        name: null,
        code: null,
        address: null
    })

    async function handleEditForm(codeData) {
        const formData = Object.fromEntries(codeData)
        setIsLoadingUpdate(true)
        try {
            await updateCodeItem(formData, id)
            onClose()
        } catch(error) {
            console.error(error)
        } finally {
            setIsLoadingUpdate(false)
        }
    }

    async function handleDelete() {
        setIsLoadingDelete(true)
        try {
            await deleteCodeItem(id)
            onClose()
        } catch(error) {
            console.error(error)
        } finally {
            setIsLoadingDelete(false)
        }
    }

    const formContent = [
        { component: TextField, label: "Code title", placeholder:"My friends place", defaultValue: code?.name, name: "name", required:true, id: "input-title", error: errors.name},
        { component: TextField, label: "Address", placeholder:"My friends address", defaultValue: code?.address, name: "address", required: true, id: "input-address", error: errors.address},
        { component: TextField, label: "Code", placeholder:"The door code", defaultValue: code?.code, name: "code", required: true, id: "input-", error: errors.code}
    ]

    const buttons = [
        {variant: "destructive", text: "Delete", type: "button", loading: isLoadingDelete, onClick:handleDelete },
        {variant: "ghost", text: "Cancel",type: "button", onClick: onClose},
        {variant: "primary", text: "Save"}
    ]
    
    return (
        <Modal 
            title={"Edit code"}
            onClose={onClose}
        >
                    <Form
                        isLoading = {codeIsLoading}
                        fields={formContent}
                        handleSubmit={handleEditForm}
                        buttons={buttons}
                    />
        </Modal>
    )
}

export default EditModal
