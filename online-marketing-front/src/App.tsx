import type {Component} from 'solid-js';
import {lazy, onMount} from "solid-js";
import styles from './App.module.css';
import {setAvailableLanguages} from "./pages/Admin/stores/adminStore";
import {getLanguages} from "./utils/languageAsync";
import {Route, Routes} from "@solidjs/router";

const Home = lazy(() => import("./pages/Home/Home"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const Store = lazy(() => import("./pages/Store/Store"));


const App: Component = () => {
  onMount(async () => {
    setAvailableLanguages(await getLanguages());
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
