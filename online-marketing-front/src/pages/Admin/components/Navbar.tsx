import {Component, For} from "solid-js";
import "./Navbar.css"

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
                <button onClick={() => setNav(value)}>
                  <span>{value}</span>
                </button>
              </li>
          }
        </For>
        <li>
          <button class="log-out" onClick={() => setLogOut(true)}>
            <span>LogOut</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
