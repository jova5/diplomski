import {Component, createSignal} from "solid-js";
import {setStoreOpenImageEdit, storeOpenImageEdit, storePendingEdit} from "../../store/storeModalStore";
import {convertImageToBase64} from "../../../Admin/utils/converteImageToBase64";
import ModalWrapper from "../../../../components/ModalWrapper";
import {translate} from "../../../../utils/languageAsync";
import {StoreRequest} from "../../../../dto/StoreRequest";
import {storeStore} from "../../store/storeStore";
import {updateStoreByOwner} from "../../../../utils/storeAsync";

const StoreImageEditModal: Component = () => {
  const [localImage, setLocalImage] = createSignal<File>();
  const setOpen = () => {
    setStoreOpenImageEdit(prev => !prev);
  }

  const handleOK = async () => {
    let storeImage;
    if (localImage() !== undefined) {
      storeImage = await convertImageToBase64(localImage());
      const store: StoreRequest = {
        name: storeStore()!.name,
        description: storeStore()!.description,
        bannerImage: storeStore()!.bannerImage,
        storeImage: storeImage,
        numOfRating: storeStore()!.numOfRating,
        sumOfRating: storeStore()!.sumOfRating
      }
      await updateStoreByOwner(store, storeStore()!.id);
      setLocalImage(undefined);
    }
  }
  return (
    <ModalWrapper
      name={() => translate("editStoreImage")}
      open={storeOpenImageEdit}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={storePendingEdit}>
      <p style={{"margin-bottom": "0"}}>{translate("storeImage")}</p>
      <input
        class="input-custom"
        type="file"
        accept="image/png, image/jpeg"
        onChange={(e) => setLocalImage(e.currentTarget.files !== null ? e.currentTarget.files[0] : undefined)}
        disabled={storePendingEdit()}/>
    </ModalWrapper>
  )
}

export default StoreImageEditModal;
