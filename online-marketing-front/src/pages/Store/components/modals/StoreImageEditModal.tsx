import {Component, createSignal} from "solid-js";
import {setStoreOpenImageEdit, storeOpenImageEdit, storePendingEdit} from "../../store/storeModalStore";
import {convertImageToBase64} from "../../../Admin/utils/converteImageToBase64";
import {addImage} from "../../../Admin/stores/modalStore";
import ModalWrapper from "../../../../components/ModalWrapper";
import {translate} from "../../../../utils/languageAsync";

const StoreImageEditModal: Component = () => {
  const [localImage, setLocalImage] = createSignal<File>();
  const setOpen = () => {
    setStoreOpenImageEdit(prev => !prev);
  }

  const handleOK = async () => {
    let addIm;
    if (localImage() !== undefined) {
      addIm = await convertImageToBase64(localImage());
    } else {
      addIm = addImage();
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
