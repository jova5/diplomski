import {Component, createSignal} from "solid-js";
import {translate} from "../../utils/languageAsync";
import {
  addDescription,
  addHeader,
  addId,
  addImage,
  addPremium,
  openEditModal,
  pendingEdit,
  setAddDescription,
  setAddHeader,
  setAddPremium,
  setOpenEditModal
} from "../../stores/modalStore";
import ModalWrapper from "../../../../components/ModalWrapper";
import {convertImageToBase64} from "../../utils/converteImageToBase64";
import {AddRequest} from "../../../../dto/AddRequest";
import {checkEditReqForm} from "../../utils/formChecks";
import {updateAdd} from "../../utils/addAsync";

const EditAddModal: Component = () => {
  const [localImage, setLocalImage] = createSignal<File>();
  const setOpen = () => {
    setOpenEditModal(prev => !prev);
  }

  const handleOK = async () => {
    let addIm;
    if (localImage() !== undefined){
      addIm = await convertImageToBase64(localImage());
    }else{
      addIm = addImage();
    }

    const add: AddRequest = {
      header: addHeader(),
      description: addDescription(),
      image: addIm,
      premium: addPremium(),
    }
    if (!checkEditReqForm(add)) {
      alert(translate("fillAllFields"));
    } else {
      await updateAdd(add, addId());
    }
  }
  return (
    <ModalWrapper
      name={() => translate("editAdd")}
      open={openEditModal}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={pendingEdit}
    >
      <p>{translate("addHeader")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("addHeader")}
        value={addHeader()}
        onChange={(e) => setAddHeader(e.currentTarget.value)}
        disabled={pendingEdit()}/>
      <p>{translate("description")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("description")}
        value={addDescription()}
        onChange={(e) => setAddDescription(e.currentTarget.value)}
        disabled={pendingEdit()}/>

      <label for="premium">{translate("premium")}
        <input
          class="input-custom"
          type="checkbox"
          id="premium"
          checked={addPremium()}
          onChange={(e) => setAddPremium(e.currentTarget.checked)}
          disabled={pendingEdit()}/>
      </label>

      <p>{translate("addImage")}</p>
      <input
        class="input-custom"
        type="file"
        accept="image/png, image/jpeg"
        onChange={(e) => setLocalImage(e.currentTarget.files !== null ? e.currentTarget.files[0] : undefined)}
        disabled={pendingEdit()}/>
    </ModalWrapper>
  )
}

export default EditAddModal;
