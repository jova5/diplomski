import {Component} from "solid-js";
import Logo from "../../../components/Logo";
import SearchBar from "../../../components/SearchBar";
import LanguagePicker from "../../Admin/components/LanguagePicker";
import {nav, setLogOut} from "../../Admin/stores/adminNavigationStore";
import {translate} from "../../../utils/languageAsync";
import './Navbar.css';
import {setHomeSearch} from "../../Store/homeStore";

const HomeNavbar: Component = () => {
  return (
    <nav>
      <Logo/>
      <div class="search-container">
        <SearchBar onChange={(str) => setHomeSearch(str)} placeholder={translate("search") + "..."}/>
      </div>
      <ul>
        <li>
          <LanguagePicker/>
        </li>
        <li>
          <button class="log-out nav-button" onClick={() => setLogOut(true)}>
            <span>{translate("logIn")}</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default HomeNavbar;
