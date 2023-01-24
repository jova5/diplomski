import {Component} from "solid-js";
import {translate} from "../../../../utils/languageAsync";
import {
  setStoreEditSingleProperty,
  setStoreOpenAddressEdit,
  storeEditSingleProperty,
  storeOpenAddressEdit,
  storePendingEdit
} from "../../store/storeModalStore";
import ModalWrapper from "../../../../components/ModalWrapper";
import {ContactRequest} from "../../../../dto/ContactRequest";
import {updateContactByOwner} from "../../../../utils/storeAsync";
import {storeStore} from "../../store/storeStore";

const StoreAddressEditModal: Component = () => {
  const handleOk = async () => {
    const contactReq: ContactRequest = {
      storeId: storeStore()!.id,
      address: storeEditSingleProperty(),
    }
    await updateContactByOwner(contactReq, storeStore()?.contactId!);
  }
  const setOpen = () => {
    setStoreOpenAddressEdit(prev => !prev);
  }
  return (
    <ModalWrapper
      name={() => translate("editAddress")}
      open={storeOpenAddressEdit}
      setOpen={setOpen}
      handleOK={handleOk}
      pending={storePendingEdit}>
      <p style={{"margin-bottom": "0"}}>{translate("address")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("address")}
        value={storeEditSingleProperty()}
        onChange={(e) => setStoreEditSingleProperty(e.currentTarget.value)}
        disabled={storePendingEdit()}/>
    </ModalWrapper>
  )
}

export default StoreAddressEditModal;
