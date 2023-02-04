import {Component, onMount} from "solid-js";
import "./Store.css";
import StoreHeader from "./components/StoreHeader";
import StoreAdds from "./components/StoreAdds";
import {setStoreStore} from "./store/storeStore";
import {getStoreById} from "../../utils/storeAsync";
import {translate} from "../../utils/languageAsync";
import StoreFooter from "./components/StoreFooter";
import StoreAddressEditModal from "./components/modals/StoreAddressEditModal";
import StorePhoneEditModal from "./components/modals/StorePhoneEditModal";
import StoreEmailEditModal from "./components/modals/StoreEmailEditModal";
import StoreHeaderImageEditModal from "./components/modals/StoreHeaderImageEditModal";
import StoreImageEditModal from "./components/modals/StoreImageEditModal";
import ConfirmationModal from "../../components/ConfirmationModal";
import {setStoreDeleteAddModal, storeAddId, storeDeleteAddModal, storeDeleteAddPending} from "./store/storeModalStore";
import StoreAddEditModal from "./components/modals/StoreAddEditModal";
import {deleteAddByOwner} from "../../utils/addAsync";
import {useParams} from "@solidjs/router";
import {setLogIn} from "../../stores/authStore";

const Store: Component = () => {
  console.log("Store");
  const params = useParams();

  onMount(async () => {
    setStoreStore(await getStoreById(+params.id));
    setLogIn(localStorage.getItem("user") !== null)
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
        handleOK={() => deleteAddByOwner(storeAddId())}
        message={() => `${translate("deleteStoreAdd?")} test???`}
        pending={storeDeleteAddPending}
      />
    </>
  )
}

export default Store;
