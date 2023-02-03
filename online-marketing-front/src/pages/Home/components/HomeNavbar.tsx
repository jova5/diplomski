import {Component} from "solid-js";
import Logo from "../../../components/Logo";
import SearchBar from "../../../components/SearchBar";
import LanguagePicker from "../../Admin/components/LanguagePicker";
import {nav} from "../../Admin/stores/adminNavigationStore";
import {translate} from "../../../utils/languageAsync";
import './Navbar.css';
import {setHomeSearch} from "../store/homeStore";
import {setIsHomeLogin, setOpenHomeLoginRegisterModal} from "../store/homeModalStore";

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
          <button class="log-out nav-button" onClick={() => {
            setIsHomeLogin(true);
            setOpenHomeLoginRegisterModal(true);
          }}>
            <span>{translate("logIn")}</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default HomeNavbar;
