import {Component} from "solid-js";
import {translate} from "../../../../utils/languageAsync";
import {
  setStoreEditSingleProperty,
  setStoreOpenPhoneEdit,
  storeEditSingleProperty,
  storeOpenPhoneEdit,
  storePendingEdit
} from "../../store/storeModalStore";
import ModalWrapper from "../../../../components/ModalWrapper";
import {updatePhoneByOwner} from "../../../../utils/storeAsync";
import {storeStore} from "../../store/storeStore";
import {PhoneRequest} from "../../../../dto/PhoneRequest";

const StorePhoneEditModal: Component = () => {
  const handleOk = async () => {
    const phoneReq: PhoneRequest = {
      contactId: storeStore()!.contactId!,
      number: storeEditSingleProperty(),
    }
    await updatePhoneByOwner(phoneReq, storeStore()!.phoneId!);
  }
  const setOpen = () => {
    setStoreOpenPhoneEdit(prev => !prev);
  }
  return (
    <ModalWrapper
      name={() => translate("editPhone")}
      open={storeOpenPhoneEdit}
      setOpen={setOpen}
      handleOK={handleOk}
      pending={storePendingEdit}>
      <p style={{"margin-bottom": "0"}}>{translate("phone")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("phone")}
        value={storeEditSingleProperty()}
        onChange={(e) => setStoreEditSingleProperty(e.currentTarget.value)}
        disabled={storePendingEdit()}/>
    </ModalWrapper>
  )
}

export default StorePhoneEditModal;
