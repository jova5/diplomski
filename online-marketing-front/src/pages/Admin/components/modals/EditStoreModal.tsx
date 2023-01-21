import {Component, createSignal} from "solid-js";
import {translate} from "../../../../utils/languageAsync";
import {
  openEditModal,
  pendingEdit,
  setOpenEditModal,
  setStoreAddress,
  setStoreDescription,
  setStoreEmail,
  setStoreName,
  setStorePhone,
  storeAddress,
  storeBannerImage,
  storeContactId,
  storeDescription,
  storeEmail,
  storeEmailId,
  storeId,
  storeImage,
  storeName,
  storePhone,
  storePhoneId
} from "../../stores/modalStore";
import ModalWrapper from "../../../../components/ModalWrapper";
import {checkStoreReqForm} from "../../utils/formChecks";
import {convertImageToBase64} from "../../utils/converteImageToBase64";
import {StoreRequest} from "../../../../dto/StoreRequest";
import {updateContact, updateEmail, updatePhone, updateStore} from "../../../../utils/storeAsync";
import {ContactRequest} from "../../../../dto/ContactRequest";
import {EmailRequest} from "../../../../dto/EmailRequest";
import {PhoneRequest} from "../../../../dto/PhoneRequest";
import './EditStoreModal.css';

const EditStoreModal: Component = () => {
  const [localBannerImage, setLocalBannerImage] = createSignal<File>();
  const [localStoreImage, setLocalStoreImage] = createSignal<File>();
  // const [localEmail, setLocalEmail] = createSignal<string>(storeEdit()?.email!);
  // const [localPhone, setLocalPhone] = createSignal<string>(storeEdit()?.phone!);
  // const [localAddress, setLocalAddress] = createSignal<string>(storeEdit()?.address!);

  const setOpen = () => {
    setOpenEditModal(prev => !prev);
  }

  const handleOK = async () => {
    const bannerImageBase64 = await convertImageToBase64(localBannerImage());
    const storeImageBase64 = await convertImageToBase64(localStoreImage());
    const store: StoreRequest = {
      name: storeName(),
      description: storeDescription(),
      bannerImage: bannerImageBase64,
      storeImage: storeImageBase64,
      numOfRating: 0,
      sumOfRating: 0
    }
    if (!checkStoreReqForm(store, storeAddress(), storeEmail(), storePhone())) {
      alert(translate("fillAllFields"));
    } else {
      await updateStore(store, +storeId());

      const contactReq: ContactRequest = {
        storeId: +storeId(),
        address: storeAddress(),
      }
      await updateContact(contactReq, storeContactId());

      const emailReq: EmailRequest = {
        contactId: storeContactId(),
        email: storeEmail(),
      }
      await updateEmail(emailReq, storeEmailId());

      const phoneReq: PhoneRequest = {
        contactId: storeContactId(),
        number: storePhone(),
      }
      await updatePhone(phoneReq, storePhoneId());
    }
  }

  // createEffect(() => {
  //   console.log(storeEdit());
  // })

  return (
    <ModalWrapper
      name={() => translate("editStore")}
      open={openEditModal}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={pendingEdit}
    >
      <p>{translate("storeName")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("storeName")}
        value={storeName()}
        onChange={(e) => setStoreName(e.currentTarget.value)}
        disabled={pendingEdit()}/>
      <p>{translate("description")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("description")}
        value={storeDescription()}
        onChange={(e) => setStoreDescription(e.currentTarget.value)}
        disabled={pendingEdit()}/>

      <p>{translate("address")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("address")}
        value={storeAddress()}
        onChange={(e) => setStoreAddress(e.currentTarget.value)}
        disabled={pendingEdit()}/>

      <p>{translate("email")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("email")}
        value={storeEmail()}
        onChange={(e) => setStoreEmail(e.currentTarget.value)}
        disabled={pendingEdit()}/>

      <p>{translate("phone")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("phone")}
        value={storePhone()}
        onChange={(e) => setStorePhone(e.currentTarget.value)}
        disabled={pendingEdit()}/>

      <p>{translate("bannerImage")}</p>
      <input
        class={storeBannerImage() === "" ? "input-custom" : "input-custom imageExists"}
        type="file"
        accept="image/png, image/jpeg"
        placeholder={translate("bannerImage")}
        onChange={(e) => setLocalBannerImage(e.currentTarget.files !== null ? e.currentTarget.files[0] : undefined)}
        disabled={pendingEdit()}/>
      <p>{translate("storeImage")}</p>
      <input
        class={storeImage() === "" ? "input-custom" : "input-custom imageExists"}
        type="file"
        accept="image/png, image/jpeg"
        placeholder={translate("storeImage")}
        onChange={(e) => {
          return setLocalStoreImage(e.currentTarget.files !== null ? e.currentTarget.files[0] : undefined);
        }}
        disabled={pendingEdit()}/>
    </ModalWrapper>
  )
}

export default EditStoreModal;
