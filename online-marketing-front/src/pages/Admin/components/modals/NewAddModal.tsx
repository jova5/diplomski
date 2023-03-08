import {Component, createEffect, createSignal, For} from "solid-js";
import {openAddModal, pendingAdd, setOpenAddModal} from "../../stores/modalStore";
import {convertImageToBase64} from "../../utils/converteImageToBase64";
import {checkAddReqForm} from "../../utils/formChecks";
import {translate} from "../../../../utils/languageAsync";
import ModalWrapper from "../../../../components/ModalWrapper";
import {usersStores} from "../../stores/adminStore";
import {AddRequest} from "../../../../dto/AddRequest";
import {addAdd} from "../../../../utils/addAsync";

const NewAddModal: Component = () => {
  const [header, setHeader] = createSignal<string>("");
  const [description, setDescription] = createSignal<string>("");
  const [premium, setPremium] = createSignal<boolean>(false);
  const [image, setImage] = createSignal<File>();
  const [storeId, setStoreId] = createSignal<string>("");

  createEffect(() => {
    if (openAddModal()) {
      setHeader("");
      setDescription("");
      setPremium(false);
      setImage();
      setStoreId("");
    }
  })

  const setOpen = () => {
    setOpenAddModal(prev => !prev);
  }

  const handleOK = async () => {
    const addImage = await convertImageToBase64(image());
    const add: AddRequest = {
      header: header(),
      description: description(),
      storeId: +storeId(),
      image: addImage,
      premium: premium(),
    }
    if (!checkAddReqForm(add)) {
      alert(translate("fillAllFields"));
    } else {
      // console.log(add);
      await addAdd(add);
    }
  }

  return (
    <ModalWrapper
      name={() => translate("addAdd")}
      open={openAddModal}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={pendingAdd}
    >
      <p>{translate("store")}</p>
      <select
        class="language-select"
        name="storeId"
        onChange={(e) => setStoreId(e.currentTarget.value)}
        disabled={pendingAdd()}
      >
        <option
          value=""
          selected
        >-- {translate("select")} --
        </option>
        <For each={usersStores()}>
          {
            (value) =>
              <option value={`${value.id}`}>{value.name}</option>
          }
        </For>
      </select>

      <p>{translate("addHeader")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("addHeader")}
        onChange={(e) => setHeader(e.currentTarget.value)}
        disabled={pendingAdd()}/>
      <p>{translate("description")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("description")}
        onChange={(e) => setDescription(e.currentTarget.value)}
        disabled={pendingAdd()}/>

      <label for="premium">{translate("premium")}
        <input
          class="input-custom"
          type="checkbox"
          id="premium"
          onChange={(e) => setPremium(e.currentTarget.checked)}
          disabled={pendingAdd()}/>
      </label>

      <p>{translate("addImage")}</p>
      <input
        class="input-custom"
        type="file"
        accept="image/png, image/jpeg"
        onChange={(e) => setImage(e.currentTarget.files !== null ? e.currentTarget.files[0] : undefined)}
        disabled={pendingAdd()}/>
    </ModalWrapper>
  )
}

export default NewAddModal;
