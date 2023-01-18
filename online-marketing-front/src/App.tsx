import type {Component} from 'solid-js';
import {onMount} from "solid-js";
import styles from './App.module.css';
import {setAvailableLanguages} from "./pages/Admin/stores/adminStore";
import {getLanguages} from "./pages/Admin/utils/languageAsync";
import Home from "./pages/Home/Home";

const App: Component = () => {
  onMount(async () => {
    setAvailableLanguages(await getLanguages());
  });

  return (
    <div class={styles.container}>
      <Home/>
    </div>
  );
};

export default App;
