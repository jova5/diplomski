import {Component, Show} from "solid-js";
import {translate} from "../../../utils/languageAsync";
import {storeStore} from "../store/storeStore";
import {IconButton} from "@suid/material";
import EditIcon from "@suid/icons-material/Edit";
import {
  setStoreEditSingleProperty,
  setStoreOpenAddressEdit,
  setStoreOpenEmailEdit,
  setStoreOpenPhoneEdit
} from "../store/storeModalStore";
import {logIn} from "../../../stores/authStore";

const StoreFooter: Component = () => {
  return (
    <footer>
      <p style={{"margin-bottom": "0"}}>
        {translate("address") + ": " + storeStore()?.address}
        <Show when={logIn()} keyed>
          <IconButton
            style={{"margin-left": "10px", "background-color": "white"}}
            onClick={() => {
              setStoreEditSingleProperty(storeStore()?.address!)
              setStoreOpenAddressEdit(true);
            }}
          >
            <EditIcon/>
          </IconButton>
        </Show>
      </p>
      <p style={{"margin-bottom": "0"}}>
        {translate("phone") + ": " + storeStore()?.phone}
        <Show when={logIn()} keyed>
          <IconButton
            style={{"margin-left": "10px", "background-color": "white"}}
            onClick={() => {
              setStoreEditSingleProperty(storeStore()?.phone!)
              setStoreOpenPhoneEdit(true);
            }}
          >
            <EditIcon/>
          </IconButton>
        </Show>
      </p>
      <p style={{"margin-bottom": "0"}}>
        {translate("email") + ": " + storeStore()?.email}
        <Show when={logIn()} keyed>
          <IconButton
            style={{"margin-left": "10px", "background-color": "white"}}
            onClick={() => {
              setStoreEditSingleProperty(storeStore()?.email!)
              setStoreOpenEmailEdit(true);
            }}
          >
            <EditIcon/>
          </IconButton>
        </Show>
      </p>
    </footer>
  )
}

export default StoreFooter;
