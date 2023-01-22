import {Component, onMount} from "solid-js";
import "./Store.css";
import StoreHeader from "./components/StoreHeader";
import StoreAdds from "./components/StoreAdds";
import {setStoreStore, storeStore} from "./store/storeStore";
import {getStoreById} from "../../utils/storeAsync";
import {translate} from "../../utils/languageAsync";
import EditIcon from '@suid/icons-material/Edit';
import {IconButton} from "@suid/material";
import StoreFooter from "./components/StoreFooter";
import StoreAddressEditModal from "./components/modals/StoreAddressEditModal";
import StorePhoneEditModal from "./components/modals/StorePhoneEditModal";
import StoreEmailEditModal from "./components/modals/StoreEmailEditModal";
import StoreHeaderImageEditModal from "./components/modals/StoreHeaderImageEditModal";
import StoreImageEditModal from "./components/modals/StoreImageEditModal";
import ConfirmationModal from "../../components/ConfirmationModal";
import {setStoreDeleteAddModal, storeDeleteAddModal, storeDeleteAddPending} from "./store/storeModalStore";
import StoreAddEditModal from "./components/modals/StoreAddEditModal";

const Store: Component = () => {
  console.log("Store");

  onMount(async () => {
    setStoreStore(await getStoreById(12));
  })

  return (
    <>
      <StoreHeader/>
      <div style={{"display": "flex", "flex-flow": "column"}}>
        <StoreAdds/>
        <StoreFooter/>
      </div>
      <StoreAddressEditModal/>
      <StorePhoneEditModal/>
      <StoreEmailEditModal/>
      <StoreHeaderImageEditModal/>
      <StoreImageEditModal/>
      <StoreAddEditModal/>
      <ConfirmationModal
        header={() => translate("deleteStoreAdd")}
        open={storeDeleteAddModal}
        setOpen={setStoreDeleteAddModal}
        handleOK={() => {}}
        message={() => `${translate("deleteStoreAdd?")} test???`}
        pending={storeDeleteAddPending}
      />
    </>
  )
}

export default Store;
