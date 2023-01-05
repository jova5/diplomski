import {Component} from "solid-js";
import "./Admin.css";
import Navbar from "./components/Navbar";
import {nav, NavOptions} from "./adminNavigationStore";
import {Dynamic} from "solid-js/web";

const Admin: Component = () => {
  return (
    <>
      <Navbar/>
      <Dynamic component={NavOptions[nav()]}/>
    </>
  )
}

export default Admin;
