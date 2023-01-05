import {Component, For} from "solid-js";
import "./Navbar.css"

import {nav, NavValues, setNav} from "../adminNavigationStore";

const Navbar: Component = () => {
  return (
    <nav>
      <div class="left-side">
        <div class="line"></div>
        <h3 class="logo">
          ONLINE<br/>MARKETING
        </h3>
      </div>
      <ul>
        <For each={NavValues}>
          {
            (value) =>
              <li>
                <a class="logoutButton" href="#" onClick={() => setNav(value)}>
                  <span>{value}</span>
                </a>
              </li>
          }
        </For>
        {/*<li>*/}
        {/*  <a class="logoutButton" href="#" onClick={() => setNav(NavValues[0])}>*/}
        {/*    <span>Users</span>*/}
        {/*  </a>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <a class="logoutButton" href="#" onClick={() => setNav(NavValues[1])}>*/}
        {/*    <span>Stores</span>*/}
        {/*  </a>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <a class="logoutButton" href="#" onClick={() => setNav(NavValues[2])}>*/}
        {/*    <span>Categories</span>*/}
        {/*  </a>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <a class="logoutButton" href="#" onClick={() => setNav(NavValues[3])}>*/}
        {/*    <span>LogOut</span>*/}
        {/*  </a>*/}
        {/*</li>*/}
      </ul>
    </nav>
  )
}

export default Navbar;
