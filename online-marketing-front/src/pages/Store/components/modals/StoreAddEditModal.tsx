import {Component, createSignal} from "solid-js";
import {translate} from "../../../../utils/languageAsync";
import {addHeader, addImage} from "../../../Admin/stores/modalStore";
import ModalWrapper from "../../../../components/ModalWrapper";
import {convertImageToBase64} from "../../../Admin/utils/converteImageToBase64";
import {
  setStoreAddDescription,
  setStoreAddHeader,
  setStoreAddPremium,
  setStoreOpenAddEdit,
  storeAddDescription,
  storeAddHeader,
  storeAddPremium,
  storeOpenAddEdit,
  storePendingEdit
} from "../../store/storeModalStore";

const StoreAddEditModal: Component = () => {
  const [localImage, setLocalImage] = createSignal<File>();
  const setOpen = () => {
    setStoreOpenAddEdit(prev => !prev);
  }

  const handleOK = async () => {
    let addIm;
    if (localImage() !== undefined) {
      addIm = await convertImageToBase64(localImage());
    } else {
      addIm = addImage();
    }

    // const add: AddRequest = {
    //   header: addHeader(),
    //   description: addDescription(),
    //   image: addIm,
    //   premium: addPremium(),
    // }
    // if (!checkEditReqForm(add)) {
    //   alert(translate("fillAllFields"));
    // } else {
    //   await updateAdd(add, addId());
    // }
  }
  return (
    <ModalWrapper
      name={() => translate("editAdd")}
      open={storeOpenAddEdit}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={storePendingEdit}
    >
      <p style={{"margin-bottom": "0"}}>{translate("addHeader")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("addHeader")}
        value={storeAddHeader()}
        onChange={(e) => setStoreAddHeader(e.currentTarget.value)}
        disabled={storePendingEdit()}/>
      <p style={{"margin-bottom": "0"}}>{translate("description")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("description")}
        value={storeAddDescription()}
        onChange={(e) => setStoreAddDescription(e.currentTarget.value)}
        disabled={storePendingEdit()}/>

      <label for="premium">{translate("premium")}
        <input
          class="input-custom"
          type="checkbox"
          id="premium"
          checked={storeAddPremium()}
          onChange={(e) => setStoreAddPremium(e.currentTarget.checked)}
          disabled={storePendingEdit()}/>
      </label>

      <p style={{"margin-bottom": "0"}}>{translate("addImage")}</p>
      <input
        class="input-custom"
        type="file"
        accept="image/png, image/jpeg"
        onChange={(e) => setLocalImage(e.currentTarget.files !== null ? e.currentTarget.files[0] : undefined)}
        disabled={storePendingEdit()}/>
    </ModalWrapper>
  )
}

export default StoreAddEditModal;
