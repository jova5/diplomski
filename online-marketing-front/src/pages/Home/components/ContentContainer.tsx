import {Component} from "solid-js";
import "./ContentContainer.css";
import {Dynamic} from "solid-js/web";
import {homeNav, HomeNavOptions} from "../store/homeNavigationStore";

const ContentContainer: Component = () => {
  return (
    <div class="content-container">
      <Dynamic component={HomeNavOptions[homeNav()]}/>
    </div>
  )
}

export default ContentContainer;
