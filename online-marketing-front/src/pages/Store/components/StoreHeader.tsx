import {Component} from "solid-js";
import "./StoreHeader.css";
import EditIcon from "@suid/icons-material/Edit";
import {IconButton} from "@suid/material";
import {setStoreOpenHeaderImageEdit, setStoreOpenImageEdit} from "../store/storeModalStore";

const StoreHeader: Component = () => {
  return (
    <header style={{"height": "300px", "padding-bottom": "75px", "position": "relative"}}>
      <div style={{"height": "300px"}}>
        <img style={{"width": "100%", "height": "100%"}}
             src={"../../../../../assets/prodavnica.png"} alt="Prodavnica"/>
        <IconButton
          style={{    "position": "absolute",
            "bottom": "80px",
            "right": "0px"}}
          onClick={() => {
            setStoreOpenHeaderImageEdit(true);
          }}
        >
          <EditIcon/>
        </IconButton>
      </div>
      <div class="store-image">
        <img style={{
          "width": "100%",
          "height": "100%"
        }} src={"../../../../../assets/prodavnica.png"} alt="Prodavnica"/>
        <IconButton
          style={{    "position": "absolute",
            "bottom": "0px",
            "right": "0px"}}
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
