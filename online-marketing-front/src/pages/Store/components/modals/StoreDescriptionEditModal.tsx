import {Component} from "solid-js";
import {storeStore} from "../../store/storeStore";
import {
  setStoreEditSingleProperty,
  setStoreOpenDescriptionEdit,
  storeEditSingleProperty,
  storeOpenDescriptionEdit,
  storePendingEdit
} from "../../store/storeModalStore";
import {updateStoreByOwner} from "../../../../utils/storeAsync";
import ModalWrapper from "../../../../components/ModalWrapper";
import {translate} from "../../../../utils/languageAsync";
import {StoreRequest} from "../../../../dto/StoreRequest";

const StoreDescriptionEditModal: Component = () => {
  const handleOk = async () => {
    const store: StoreRequest = {
      name: storeStore()!.name,
      description: storeEditSingleProperty(),
      bannerImage: storeStore()!.bannerImage,
      storeImage: storeStore()!.storeImage,
      numOfRating: storeStore()!.numOfRating,
      sumOfRating: storeStore()!.sumOfRating
    }
    await updateStoreByOwner(store, storeStore()!.id);
  }
  const setOpen = () => {
    setStoreOpenDescriptionEdit(prev => !prev);
  }
  return (
    <ModalWrapper
      name={() => translate("details")}
      open={storeOpenDescriptionEdit}
      setOpen={setOpen}
      handleOK={handleOk}
      pending={storePendingEdit}>
      <p style={{"margin-bottom": "0"}}>{translate("details")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("details")}
        value={storeEditSingleProperty()}
        onChange={(e) => setStoreEditSingleProperty(e.currentTarget.value)}
        disabled={storePendingEdit()}/>
    </ModalWrapper>
  )
}

export default StoreDescriptionEditModal;
