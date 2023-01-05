import type {Component} from 'solid-js';
import styles from './App.module.css';
import Admin from "./pages/Admin/Admin";

const App: Component = () => {
  return (
    <div class={styles.container}>
      <Admin/>
    </div>
  );
};

export default App;
