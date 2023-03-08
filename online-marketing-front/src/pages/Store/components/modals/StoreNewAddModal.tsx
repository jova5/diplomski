import {Component, createEffect, createSignal} from "solid-js";
import {openAddModal} from "../../../Admin/stores/modalStore";
import {convertImageToBase64} from "../../../Admin/utils/converteImageToBase64";
import {AddRequest} from "../../../../dto/AddRequest";
import {checkAddReqForm} from "../../../Admin/utils/formChecks";
import {translate} from "../../../../utils/languageAsync";
import {addAdd, addAddByOwner} from "../../../../utils/addAsync";
import ModalWrapper from "../../../../components/ModalWrapper";
import {setStoreOpenNewAdd, storeOpenNewAdd, storePendingAdd} from "../../store/storeModalStore";
import {storeStore} from "../../store/storeStore";

const StoreNewAddModal: Component = () => {
  const [header, setHeader] = createSignal<string>("");
  const [description, setDescription] = createSignal<string>("");
  const [premium, setPremium] = createSignal<boolean>(false);
  const [image, setImage] = createSignal<File>();

  createEffect(() => {
    if (openAddModal()) {
      setHeader("");
      setDescription("");
      setPremium(false);
      setImage();
    }
  })

  const setOpen = () => {
    setStoreOpenNewAdd(prev => !prev);
  }

  const handleOK = async () => {
    const addImage = await convertImageToBase64(image());
    const add: AddRequest = {
      header: header(),
      description: description(),
      storeId: storeStore()!.id,
      image: addImage,
      premium: premium(),
    }
    if (!checkAddReqForm(add)) {
      alert(translate("fillAllFields"));
    } else {
      // console.log(add);
      await addAddByOwner(add);
    }
  }

  return (
    <ModalWrapper
      name={() => translate("addAdd")}
      open={storeOpenNewAdd}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={storePendingAdd}
    >
      <p>{translate("addHeader")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("addHeader")}
        onChange={(e) => setHeader(e.currentTarget.value)}
        disabled={storePendingAdd()}/>
      <p>{translate("description")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("description")}
        onChange={(e) => setDescription(e.currentTarget.value)}
        disabled={storePendingAdd()}/>

      <label for="premium">{translate("premium")}
        <input
          class="input-custom"
          type="checkbox"
          id="premium"
          onChange={(e) => setPremium(e.currentTarget.checked)}
          disabled={storePendingAdd()}/>
      </label>

      <p>{translate("addImage")}</p>
      <input
        class="input-custom"
        type="file"
        accept="image/png, image/jpeg"
        onChange={(e) => setImage(e.currentTarget.files !== null ? e.currentTarget.files[0] : undefined)}
        disabled={storePendingAdd()}/>
    </ModalWrapper>
  )
}

export default StoreNewAddModal;
