import {Component} from "solid-js";
import './Home.css';
import HomeNavbar from "./components/HomeNavbar";
import ContentContainer from "./components/ContentContainer";

const Home: Component = () => {
  return (
    <div style={{"max-height": "100vh",
      display: "flex",
      "flex-flow": "column"}}>
      <HomeNavbar/>
      <div class="search-options">
        <button>Prodavnice</button>
        <button>Reklame</button>
      </div>
      <ContentContainer/>
    </div>

  )
}

export default Home;
