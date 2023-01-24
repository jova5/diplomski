import {Component} from "solid-js";
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

const StoreFooter: Component = () => {
  return (
    <footer>
      <p style={{"margin-bottom": "0"}}>
        {translate("address") + ": " + storeStore()?.address}
        <IconButton
          style={{"margin-left": "10px", "background-color": "white"}}
          onClick={() => {
            setStoreEditSingleProperty(storeStore()?.address!)
            setStoreOpenAddressEdit(true);
          }}
        >
          <EditIcon/>
        </IconButton>
      </p>
      <p style={{"margin-bottom": "0"}}>
        {translate("phone") + ": " + storeStore()?.phone}
        <IconButton
          style={{"margin-left": "10px", "background-color": "white"}}
          onClick={() => {
            setStoreEditSingleProperty(storeStore()?.phone!)
            setStoreOpenPhoneEdit(true);
          }}
        >
          <EditIcon/>
        </IconButton>
      </p>
      <p style={{"margin-bottom": "0"}}>
        {translate("email") + ": " + storeStore()?.email}
        <IconButton
          style={{"margin-left": "10px", "background-color": "white"}}
          onClick={() => {
            setStoreEditSingleProperty(storeStore()?.email!)
            setStoreOpenEmailEdit(true);
          }}
        >
          <EditIcon/>
        </IconButton>
      </p>
    </footer>
  )
}

export default StoreFooter;
