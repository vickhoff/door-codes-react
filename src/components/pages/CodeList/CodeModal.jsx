import Modal from "../../shared/Modal/Modal"
import Form from "../../shared/Form/Form"
import { TextField } from "../../shared/Input/TextField"
import { useState, useMemo } from "react"
import { useUser } from "../../../context/UserContext"
import { useFetchAPI } from "../../../hooks/useFetchAPI"
import AddressField from "../../shared/Input/AddressField"



function CodeModal({ onClose, mode, codeId }) {
  const { data: code, isLoading: codeIsLoading } = useFetchAPI( mode === "edit" ?
    `/api/items/${codeId}` : null,
    null,
  );

  const { addCodeItem, updateCodeItem, deleteCodeItem } = useUser();

  const [errors, setErrors] = useState({
    name: null,
    code: null,
    address: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pickedAddress, setPickedAddress] = useState(null);

    async function handleSubmit(codeData) {
        const formData = Object.fromEntries(codeData)
        formData.address = pickedAddress ?? code?.address

        try {
            setIsSubmitting(true)
            if (mode === "add") await addCodeItem(formData)
            if (mode === "edit") await updateCodeItem(formData, codeId)
            onClose()
        } catch(error) {
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }

  async function handleDelete() {
    setIsDeleting(true);
    try {
      await deleteCodeItem(codeId);
      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  }

  const formContent = [
    {
      component: TextField,
      autoFocus: true,
      label: "Code title",
      placeholder: "My friends place",
      name: "name",
      required: true,
      id: "input-title",
      error: errors.name,
      defaultValue: mode === "edit" ? code?.name : undefined,
    },
    {
      component: AddressField,
      label: "Address",
      placeholder: "My friends address",
      name: "address",
      required: true,
      id: "input-address",
      error: errors.address,
      defaultValue: mode === "edit" ? code?.address.text : undefined,
      onAddressSelect: setPickedAddress,
    },
    {
      component: TextField,
      label: "Code",
      placeholder: "The door code",
      name: "code",
      required: true,
      id: "input-code",
      error: errors.code,
      defaultValue: mode === "edit" ? code?.code : undefined,
    },
  ];

  const buttonsEdit = [
    {
      variant: "destructive",
      text: "Delete",
      type: "button",
      loading: isDeleting,
      onClick: handleDelete,
    },
    { variant: "ghost", text: "Cancel", type: "button", onClick: onClose },
    { variant: "primary", text: "Save", loading: isSubmitting },
  ];

  const buttonsAdd = [
    { variant: "ghost", text: "Cancel", type: "button", onClick: onClose },
    { variant: "primary", text: "Add code", loading: isSubmitting },
  ];

  return (
    <Modal title={mode === "edit" ? "Edit code" : "Add code"} onClose={onClose}>
      <Form
        fields={formContent}
        handleSubmit={handleSubmit}
        isLoading={mode === "edit" && codeIsLoading}
        buttons={mode === "edit" ? buttonsEdit : buttonsAdd}
      />
    </Modal>
  );
}

export default CodeModal;
