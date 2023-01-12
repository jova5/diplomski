import {Component, createSignal} from "solid-js";
import {openAddModal, pendingAdd, setOpenAddModal} from "../../stores/modalStore";
import {checkStoreReqForm} from "../../utils/formChecks";
import {translate} from "../../utils/languageAsync";
import ModalWrapper from "../../../../components/ModalWrapper";
import {StoreRequest} from "../../../../dto/StoreRequest";

const NewStoreModal: Component = () => {
  const [storeName, setStoreName] = createSignal<string>("");
  const [description, setDescription] = createSignal<string>("");
  const [bannerImage, setBannerImage] = createSignal<File>();
  const [storeImage, setStoreImage] = createSignal<File>();

  const setOpen = () => {
    setOpenAddModal(prev => !prev);
  }

  // createEffect(async () => {
  //   console.log(await convertBase64(bannerImage()));
  // })

  const handleOK = async () => {
    const bannerImageBase64 = await convertBase64(bannerImage());
    const storeImageBase64 = await convertBase64(storeImage());
    const store: StoreRequest = {
      name: storeName(),
      description: description(),
      bannerImage: bannerImageBase64,
      storeImage: storeImageBase64,
      numOfRating: 0,
      sumOfRating: 0
    }
    if (!checkStoreReqForm(store)) {
      alert(translate("fillAllFields"));
    } else {
      // await addStore(store);
    }
  }

  const convertBase64 = (file: File | undefined) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (file !== undefined) {
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      } else {
        resolve("");
      }
    });
  };

  return (
    <ModalWrapper
      name={() => translate("addSyntax")}
      open={openAddModal}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={pendingAdd}
    >
      <p>{translate("storeName")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("storeName")}
        onChange={(e) => setStoreName(e.currentTarget.value)}
        disabled={pendingAdd()}/>
      <p>{translate("description")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("description")}
        onChange={(e) => setDescription(e.currentTarget.value)}
        disabled={pendingAdd()}/>
      <p>{translate("bannerImage")}</p>
      <input
        class="input-custom"
        type="file"
        accept="image/png, image/jpeg"
        placeholder={translate("bannerImage")}
        onChange={(e) => setBannerImage(e.currentTarget.files !== null ? e.currentTarget.files[0] : undefined)}
        disabled={pendingAdd()}/>
      <p>{translate("storeImage")}</p>
      <input
        class="input-custom"
        type="file"
        accept="image/png, image/jpeg"
        placeholder={translate("storeImage")}
        onChange={(e) => {
          return setStoreImage(e.currentTarget.files !== null ? e.currentTarget.files[0] : undefined);
        }}
        disabled={pendingAdd()}/>
    </ModalWrapper>
  )
}

export default NewStoreModal;
