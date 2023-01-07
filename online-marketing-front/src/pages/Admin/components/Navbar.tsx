import {Component, For} from "solid-js";
import "./Navbar.css";

import {nav, NavValues, setLogOut, setNav} from "../adminNavigationStore";
import Logo from "./Logo";

const Navbar: Component = () => {
  return (
    <nav>
      <Logo/>
      <ul>
        <For each={NavValues}>
          {
            (value) =>
              <li>
                <button class={nav() === value ? "nav-button selected-button" : "nav-button"}
                        onClick={() => setNav(value)}>
                  <span>{value}</span>
                </button>
              </li>
          }
        </For>
        <li>
          <button class="log-out nav-button" onClick={() => setLogOut(true)}>
            <span>LogOut</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
