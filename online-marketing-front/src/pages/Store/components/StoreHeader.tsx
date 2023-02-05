import {Component, Show} from "solid-js";
import "./StoreHeader.css";
import EditIcon from "@suid/icons-material/Edit";
import {Button, IconButton} from "@suid/material";
import {setStoreOpenHeaderImageEdit, setStoreOpenImageEdit} from "../store/storeModalStore";
import {storeStore} from "../store/storeStore";
import {logIn, setLogIn} from "../../../stores/authStore";
import {translate} from "../../../utils/languageAsync";
import {useNavigate} from "@solidjs/router";

const StoreHeader: Component = () => {
  const navigate = useNavigate();
  return (
    <header style={{"height": "300px", "padding-bottom": "75px", "position": "relative"}}>
      <div style={{"height": "300px"}}>
        <Show when={storeStore()?.bannerImage}
              fallback={<img style={{"width": "100%", "height": "100%"}} src={"../../../../../assets/prodavnica.png"}
                             height={230} alt="Reklama"/>} keyed>
          <img style={{"width": "100%", "height": "100%"}}
               src={storeStore()?.bannerImage} alt="Prodavnica"/>
        </Show>
        <Show when={logIn()} keyed>
          <div style={{
            "display": "flex",
            "background": "transparent",
            "gap": "10px",
            "position": "absolute",
            "right": "0px",
            "top": "0px"
          }}>
            <Button
              style={{
                "background": "white",
              }}
              onClick={() => {
                navigate(`/statistics/${storeStore()!.id}`);
              }
              }
            >
              {translate("statistics")}
            </Button>
            <Button
              style={{
                "background": "white",
              }}
              onClick={() => {
                localStorage.removeItem("user");
                setLogIn(false);
                navigate("/");
              }
              }
            >
              {translate("logout")}
            </Button>
          </div>

        </Show>
        <Show when={logIn()} keyed>
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
        </Show>
      </div>
      <div class="store-image">
        <Show when={storeStore()?.bannerImage}
              fallback={<img style={{"width": "100%", "height": "100%"}} src={"../../../../../assets/prodavnica.png"}
                             height={230} alt="Reklama"/>} keyed>
          <img style={{"width": "100%", "height": "100%"}}
               src={storeStore()?.storeImage} alt="Prodavnica"/>
        </Show>
        <Show when={logIn()} keyed>
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
        </Show>
      </div>
    </header>
  )
}

export default StoreHeader;
