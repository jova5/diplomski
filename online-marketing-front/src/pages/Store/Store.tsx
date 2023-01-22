import {Component, onMount} from "solid-js";
import "./Store.css";
import StoreHeader from "./components/StoreHeader";
import StoreAdds from "./components/StoreAdds";
import {setStoreStore, storeStore} from "./store/storeStore";
import {getStoreById} from "../../utils/storeAsync";
import {translate} from "../../utils/languageAsync";
import EditIcon from '@suid/icons-material/Edit';
import {IconButton} from "@suid/material";

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
        <footer>
          <p style={{"margin-bottom": "0"}}>
            {translate("address") + ": " + storeStore()?.address}
            <IconButton
              onClick={() => {
              }}
            >
              <EditIcon/>
            </IconButton>
          </p>
          <p style={{"margin-bottom": "0"}}>
            {translate("phone") + ": " + storeStore()?.phone}
            <IconButton
              onClick={() => {
              }}
            >
              <EditIcon/>
            </IconButton>
          </p>
          <p style={{"margin-bottom": "0"}}>
            {translate("email") + ": " + storeStore()?.email}
            <IconButton
              onClick={() => {
              }}
            >
              <EditIcon/>
            </IconButton>
          </p>
        </footer>
      </div>
    </>
  )
}

export default Store;
