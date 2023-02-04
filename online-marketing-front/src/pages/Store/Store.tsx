import {Component, onMount, Show} from "solid-js";
import "./Store.css";
import StoreHeader from "./components/StoreHeader";
import StoreAdds from "./components/StoreAdds";
import {setStoreStore, storeStore} from "./store/storeStore";
import {getStoreById} from "../../utils/storeAsync";
import {translate} from "../../utils/languageAsync";
import StoreFooter from "./components/StoreFooter";
import StoreAddressEditModal from "./components/modals/StoreAddressEditModal";
import StorePhoneEditModal from "./components/modals/StorePhoneEditModal";
import StoreEmailEditModal from "./components/modals/StoreEmailEditModal";
import StoreHeaderImageEditModal from "./components/modals/StoreHeaderImageEditModal";
import StoreImageEditModal from "./components/modals/StoreImageEditModal";
import ConfirmationModal from "../../components/ConfirmationModal";
import {
  setStoreDeleteAddModal,
  setStoreEditSingleProperty,
  setStoreOpenNameEdit,
  storeAddId,
  storeDeleteAddModal,
  storeDeleteAddPending
} from "./store/storeModalStore";
import StoreAddEditModal from "./components/modals/StoreAddEditModal";
import {deleteAddByOwner} from "../../utils/addAsync";
import {useParams} from "@solidjs/router";
import {logIn, setLogIn} from "../../stores/authStore";
import {IconButton} from "@suid/material";
import EditIcon from "@suid/icons-material/Edit";
import StoreNameEditModal from "./components/modals/StoreNameEditModal";

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
        <h2 style={{
          "display": "flex",
          "justify-content": "center",
          "align-items": "center"
        }}>
          {storeStore()?.name}
          <Show when={logIn()} keyed>
            <IconButton
              style={{"margin-left": "10px", "background-color": "white"}}
              onClick={() => {
                setStoreEditSingleProperty(storeStore()?.name!)
                setStoreOpenNameEdit(true);
              }}
            >
              <EditIcon/>
            </IconButton>
          </Show>
        </h2>
        <StoreAdds/>
        <StoreFooter/>
      </div>
      <StoreAddressEditModal/>
      <StorePhoneEditModal/>
      <StoreEmailEditModal/>
      <StoreHeaderImageEditModal/>
      <StoreImageEditModal/>
      <StoreAddEditModal/>
      <StoreNameEditModal/>
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
