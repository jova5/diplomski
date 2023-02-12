import {Component, onMount} from "solid-js";
import "./Admin.css";
import Navbar from "./components/Navbar";
import {nav, NavOptions} from "./stores/adminNavigationStore";
import {Dynamic} from "solid-js/web";
import {useNavigate} from "@solidjs/router";

const Admin: Component = () => {
  console.log("Admin");
  const navigate = useNavigate();

  onMount(() => {
    const admin = localStorage.getItem("user");
    if (admin === null || JSON.parse(admin).type !== "ADMIN") {
      navigate("/");
    }
  })

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
