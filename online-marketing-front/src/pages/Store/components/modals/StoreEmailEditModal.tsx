import {Component} from "solid-js";
import ModalWrapper from "../../../../components/ModalWrapper";
import {translate} from "../../../../utils/languageAsync";
import {
  setStoreEditSingleProperty,
  setStoreOpenEmailEdit,
  storeEditSingleProperty,
  storeOpenEmailEdit,
  storePendingEdit
} from "../../store/storeModalStore";

const StoreEmailEditModal: Component = () => {
  const handleOk = () => {

  }
  const setOpen = () => {
    setStoreOpenEmailEdit(prev => !prev);
  }
  return (
    <ModalWrapper
      name={() => translate("editEmail")}
      open={storeOpenEmailEdit}
      setOpen={setOpen}
      handleOK={handleOk}
      pending={storePendingEdit}>
      <p style={{"margin-bottom": "0"}}>{translate("email")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("email")}
        value={storeEditSingleProperty()}
        onChange={(e) => setStoreEditSingleProperty(e.currentTarget.value)}
        disabled={storePendingEdit()}/>
    </ModalWrapper>
  )
}

export default StoreEmailEditModal;
