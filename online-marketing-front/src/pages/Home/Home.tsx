import {Component, For} from "solid-js";
import './Home.css';
import HomeNavbar from "./components/HomeNavbar";
import ContentContainer from "./components/ContentContainer";
import {homeNav, HomeNavValues, setHomeNav} from "./store/homeNavigationStore";
import LoginRegisterModal from "./components/modals/LoginRegisterModal";
import {translate} from "../../utils/languageAsync";

const Home: Component = () => {
  console.log("Home");
  return (
    <div style={{
      "max-height": "100vh",
      "display": "flex",
      "flex-flow": "column"
    }}>
      <HomeNavbar/>
      <div class="search-options">
        <For each={HomeNavValues}>
          {
            (value) =>
              <button class={homeNav() === value ? "nav-button selected-button" : "nav-button"}
                      onClick={() => setHomeNav(value)}>
                <span>{translate(value)}</span>
              </button>
          }
        </For>
      </div>
      <ContentContainer/>
      <LoginRegisterModal/>
    </div>

  )
}

export default Home;
