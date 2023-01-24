import {Component, Show} from "solid-js";
import "./StoreHeader.css";
import EditIcon from "@suid/icons-material/Edit";
import {IconButton} from "@suid/material";
import {setStoreOpenHeaderImageEdit, setStoreOpenImageEdit} from "../store/storeModalStore";
import {storeStore} from "../store/storeStore";

const StoreHeader: Component = () => {
  return (
    <header style={{"height": "300px", "padding-bottom": "75px", "position": "relative"}}>
      <div style={{"height": "300px"}}>
        <Show when={storeStore()?.bannerImage}
              fallback={<img src={"../../../../../assets/prodavnica.png"} height={230} alt="Reklama"/>} keyed>
          <img style={{"width": "100%", "height": "100%"}}
               src={storeStore()?.bannerImage} alt="Prodavnica"/>
        </Show>
        <IconButton
          style={{
            "position": "absolute",
            "bottom": "80px",
            "right": "0px",
            "background-color": "white"
          }}
          onClick={() => {
            setStoreOpenHeaderImageEdit(true);
          }}
        >
          <EditIcon/>
        </IconButton>
      </div>
      <div class="store-image">
        <Show when={storeStore()?.bannerImage}
              fallback={<img src={"../../../../../assets/prodavnica.png"} height={230} alt="Reklama"/>} keyed>
          <img style={{"width": "100%", "height": "100%"}}
               src={storeStore()?.storeImage} alt="Prodavnica"/>
        </Show>
        <IconButton
          style={{
            "position": "absolute",
            "bottom": "0px",
            "right": "0px",
            "background-color": "white"
          }}
          onClick={() => {
            setStoreOpenImageEdit(true);
          }}
        >
          <EditIcon/>
        </IconButton>
      </div>
    </header>
  )
}

export default StoreHeader;
