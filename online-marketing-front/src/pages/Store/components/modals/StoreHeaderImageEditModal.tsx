import {Component, createSignal} from "solid-js";
import {addImage} from "../../../Admin/stores/modalStore";
import {convertImageToBase64} from "../../../Admin/utils/converteImageToBase64";
import {translate} from "../../../../utils/languageAsync";
import {setStoreOpenHeaderImageEdit, storeOpenHeaderImageEdit, storePendingEdit} from "../../store/storeModalStore";
import ModalWrapper from "../../../../components/ModalWrapper";

const StoreHeaderImageEditModal: Component = () => {
  const [localImage, setLocalImage] = createSignal<File>();
  const setOpen = () => {
    setStoreOpenHeaderImageEdit(prev => !prev);
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
