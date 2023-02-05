import type {Component} from 'solid-js';
import {lazy, onMount} from "solid-js";
import styles from './App.module.css';
import {setAvailableLanguages} from "./pages/Admin/stores/adminStore";
import {getLanguages} from "./utils/languageAsync";
import {Route, Routes} from "@solidjs/router";
import {initiateWebSocketConnection} from "./utils/initiateWebSocketConnection";
import {setWebSocketConnected} from "./stores/webSocketStore";

const Home = lazy(() => import("./pages/Home/Home"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const Store = lazy(() => import("./pages/Store/Store"));
const Statistics = lazy(() => import("./pages/Statistics/Statistics"));


const App: Component = () => {
  onMount(async () => {
    setAvailableLanguages(await getLanguages());
    initiateWebSocketConnection("http://127.0.0.1:8080/webSocket",
      (connected) => setWebSocketConnected(connected),
      (res) => console.log(res))
  });

  return (
    <div class={styles.container}>
      <Routes>
        <Route path="/store/:id" component={Store}/>
        <Route path="/" component={Home}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/statistics/:id" component={Statistics}/>
      </Routes>
    </div>
  );
};

export default App;
