import {Component, createSignal} from "solid-js";
import {convertImageToBase64} from "../../../Admin/utils/converteImageToBase64";
import {translate} from "../../../../utils/languageAsync";
import {setStoreOpenHeaderImageEdit, storeOpenHeaderImageEdit, storePendingEdit} from "../../store/storeModalStore";
import ModalWrapper from "../../../../components/ModalWrapper";
import {StoreRequest} from "../../../../dto/StoreRequest";
import {updateStoreByOwner} from "../../../../utils/storeAsync";
import {storeStore} from "../../store/storeStore";

const StoreHeaderImageEditModal: Component = () => {
  const [localImage, setLocalImage] = createSignal<File>();
  const setOpen = () => {
    setStoreOpenHeaderImageEdit(prev => !prev);
  }

  const handleOK = async () => {
    let bannerImage;
    if (localImage() !== undefined) {
      bannerImage = await convertImageToBase64(localImage());
      const store: StoreRequest = {
        name: storeStore()!.name,
        description: storeStore()!.description,
        bannerImage: bannerImage,
        storeImage: storeStore()!.storeImage,
        numOfRating: storeStore()!.numOfRating,
        sumOfRating: storeStore()!.sumOfRating
      }
      await updateStoreByOwner(store, storeStore()!.id);
      setLocalImage(undefined);
    }
  }

  return (
    <ModalWrapper
      name={() => translate("editStoreHeaderImage")}
      open={storeOpenHeaderImageEdit}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={storePendingEdit}>
      <p style={{"margin-bottom": "0"}}>{translate("storeHeaderImage")}</p>
      <input
        class="input-custom"
        type="file"
        accept="image/png, image/jpeg"
        onChange={(e) => setLocalImage(e.currentTarget.files !== null ? e.currentTarget.files[0] : undefined)}
        disabled={storePendingEdit()}/>
    </ModalWrapper>
  )
}

export default StoreHeaderImageEditModal;
