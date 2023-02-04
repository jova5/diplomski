import {Component, createSignal} from "solid-js";
import {addedContactId, addedStoreId, openAddModal, pendingAdd, setOpenAddModal} from "../../stores/modalStore";
import {checkStoreReqForm} from "../../utils/formChecks";
import {translate} from "../../../../utils/languageAsync";
import ModalWrapper from "../../../../components/ModalWrapper";
import {StoreRequest} from "../../../../dto/StoreRequest";
import {convertImageToBase64} from "../../utils/converteImageToBase64";
import {addContact, addEmail, addPhone, addStore} from "../../../../utils/storeAsync";
import {ContactRequest} from "../../../../dto/ContactRequest";
import {EmailRequest} from "../../../../dto/EmailRequest";
import {PhoneRequest} from "../../../../dto/PhoneRequest";

const NewStoreModal: Component = () => {
  const [storeName, setStoreName] = createSignal<string>("");
  const [description, setDescription] = createSignal<string>("");
  const [address, setAddress] = createSignal<string>("");
  const [email, setEmail] = createSignal<string>("");
  const [phone, setPhone] = createSignal<string>("");
  const [bannerImage, setBannerImage] = createSignal<File>();
  const [storeImage, setStoreImage] = createSignal<File>();

  const setOpen = () => {
    setOpenAddModal(prev => !prev);
  }

  const handleOK = async () => {
    const bannerImageBase64 = await convertImageToBase64(bannerImage());
    const storeImageBase64 = await convertImageToBase64(storeImage());
    const store: StoreRequest = {
      name: storeName(),
      description: description(),
      bannerImage: bannerImageBase64,
      storeImage: storeImageBase64,
      numOfRating: 0,
      sumOfRating: 0
    }
    if (!checkStoreReqForm(store, address(), email(), phone())) {
      alert(translate("fillAllFields"));
    } else {

      await addStore(store);
      const contactReq: ContactRequest = {
        storeId: addedStoreId(),
        address: address()
      }
      await addContact(contactReq);

      const emailReq: EmailRequest = {
        contactId: addedContactId(),
        email: email()
      }
      await addEmail(emailReq);

      const phoneReq: PhoneRequest = {
        contactId: addedContactId(),
        number: phone()
      }
      await addPhone(phoneReq);
    }
  }

  return (
    <ModalWrapper
      name={() => translate("addStore")}
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

      <p>{translate("address")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("address")}
        onChange={(e) => setAddress(e.currentTarget.value)}
        disabled={pendingAdd()}/>

      <p>{translate("email")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("email")}
        onChange={(e) => setEmail(e.currentTarget.value)}
        disabled={pendingAdd()}/>

      <p>{translate("phone")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("phone")}
        onChange={(e) => setPhone(e.currentTarget.value)}
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
