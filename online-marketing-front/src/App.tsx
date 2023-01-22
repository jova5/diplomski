import type {Component} from 'solid-js';
import {onMount} from "solid-js";
import styles from './App.module.css';
import {setAvailableLanguages} from "./pages/Admin/stores/adminStore";
import {getLanguages} from "./utils/languageAsync";
import Store from "./pages/Store/Store";

const App: Component = () => {
  onMount(async () => {
    setAvailableLanguages(await getLanguages());
  });

  return (
    <div class={styles.container}>
      {/*<Home/>*/}
      <Store/>
    </div>
  );
};

export default App;
