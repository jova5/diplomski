import {Component, For} from "solid-js";
import "./Navbar.css";
import {nav, NavValues, setLogOut, setNav} from "../stores/adminNavigationStore";
import Logo from "../../../components/Logo";
import LanguagePicker from "./LanguagePicker";
import {translate} from "../../../utils/languageAsync";

const Navbar: Component = () => {
  return (
    <nav>
      <Logo/>
      <ul>
        <li>
          <LanguagePicker/>
        </li>
        <For each={NavValues}>
          {
            (value) =>
              <li>
                <button class={nav() === value ? "nav-button selected-button" : "nav-button"}
                        onClick={() => setNav(value)}>
                  <span>{translate(value.toLocaleLowerCase())}</span>
                </button>
              </li>
          }
        </For>
        <li>
          <button class="log-out nav-button" onClick={() => setLogOut(true)}>
            <span>{translate("logout")}</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
