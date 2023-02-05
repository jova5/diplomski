import type {Component} from 'solid-js';
import {createEffect, lazy, onMount} from "solid-js";
import styles from './App.module.css';
import {setAvailableLanguages} from "./pages/Admin/stores/adminStore";
import {getLanguages} from "./utils/languageAsync";
import {Route, Routes} from "@solidjs/router";
import {initiateWebSocketConnection, initiateWebSocketSubscription} from "./utils/initiateWebSocketConnection";
import {setWebSocketConnected, webSocketConnected} from "./stores/webSocketStore";

const Home = lazy(() => import("./pages/Home/Home"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const Store = lazy(() => import("./pages/Store/Store"));


const App: Component = () => {
  onMount(async () => {
    setAvailableLanguages(await getLanguages());
    initiateWebSocketConnection("http://127.0.0.1:8080/webSocket",
      (connected) => setWebSocketConnected(connected),
      (res) => console.log(res))
  });

  createEffect(() => {
    if (webSocketConnected()) {
      initiateWebSocketSubscription("/user/1/addStatistics", (msg) => {
        console.log("WebSocket message");
        console.log(msg);
      })
    }
  });

  return (
    <div class={styles.container}>
      <Routes>
        <Route path="/store/:id" component={Store}/>
        <Route path="/" component={Home}/>
        <Route path="/admin" component={Admin}/>
      </Routes>
    </div>
  );
};

export default App;
