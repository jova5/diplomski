import {Component} from "solid-js";
import ModalWrapper from "../../../../components/ModalWrapper";
import {translate} from "../../../../utils/languageAsync";
import {
  setStoreEditSingleProperty,
  setStoreOpenNameEdit,
  storeEditSingleProperty,
  storeOpenNameEdit,
  storePendingEdit
} from "../../store/storeModalStore";
import {StoreRequest} from "../../../../dto/StoreRequest";
import {storeStore} from "../../store/storeStore";
import {updateStoreByOwner} from "../../../../utils/storeAsync";

const StoreNameEditModal: Component = () => {
  const setOpen = () => {
    setStoreOpenNameEdit(prev => !prev);
  }

  const handleOK = async () => {
    const store: StoreRequest = {
      name: storeEditSingleProperty(),
      description: storeStore()!.description,
      bannerImage: storeStore()!.bannerImage,
      storeImage: storeStore()!.storeImage,
      numOfRating: storeStore()!.numOfRating,
      sumOfRating: storeStore()!.sumOfRating
    }
    await updateStoreByOwner(store, storeStore()!.id);
  }

  return (
    <ModalWrapper
      name={() => translate("editStoreName")}
      open={storeOpenNameEdit}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={storePendingEdit}>
      <p style={{"margin-bottom": "0"}}>{translate("storeName")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("storeName")}
        value={storeEditSingleProperty()}
        onChange={(e) => setStoreEditSingleProperty(e.currentTarget.value)}
        disabled={storePendingEdit()}/>
    </ModalWrapper>
  )
}

export default StoreNameEditModal;
