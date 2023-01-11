import {Component} from "solid-js";
import "./Admin.css";
import Navbar from "./components/Navbar";
import {nav, NavOptions} from "./stores/adminNavigationStore";
import {Dynamic} from "solid-js/web";

const Admin: Component = () => {
  console.log("Admin");
  return (
    <div class="admin-container">
      <Navbar/>
      <div class="container">
        <Dynamic component={NavOptions[nav()]}/>
      </div>
    </div>
  )
}

export default Admin;
