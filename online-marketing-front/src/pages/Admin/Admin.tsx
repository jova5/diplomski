import {Component} from "solid-js";
import "./Admin.css";
import Navbar from "./components/Navbar";
import {nav, NavOptions} from "./adminNavigationStore";
import {Dynamic} from "solid-js/web";

const Admin: Component = () => {
  return (
    <div>
      <Navbar/>
      <div class="container">
        <Dynamic component={NavOptions[nav()]}/>
      </div>
    </div>
  )
}

export default Admin;
