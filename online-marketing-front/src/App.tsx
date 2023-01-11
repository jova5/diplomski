import type {Component} from 'solid-js';
import styles from './App.module.css';
import Admin from "./pages/Admin/Admin";
import {onMount} from "solid-js";
import {setAvailableLanguages} from "./pages/Admin/stores/adminStore";
import {getLanguages} from "./pages/Admin/utils/languageAsync";

const App: Component = () => {
  onMount(async () => {
    setAvailableLanguages(await getLanguages());
  });

  return (
    <div class={styles.container}>
      <Admin/>
    </div>
  );
};

export default App;
