import {Component} from "solid-js";
import {translate} from "../../utils/languageAsync";
import {
  openAddModal,
  pendingAdd,
  setStoreDescription,
  setStoreName,
  storeDescription,
  storeName
} from "../../stores/modalStore";
import ModalWrapper from "../../../../components/ModalWrapper";

const EditStoreModal: Component = () => {
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
        value={storeName()}
        onChange={(e) => setStoreName(e.currentTarget.value)}
        disabled={pendingAdd()}/>
      <p>{translate("description")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("description")}
        value={storeDescription()}
        onChange={(e) => setStoreDescription(e.currentTarget.value)}
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

export default EditStoreModal;
