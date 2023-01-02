import type { Component } from 'solid-js';
import styles from './App.module.css';
import {createSignal} from "solid-js";
import {Button} from "@suid/material";

let index = 0;
const App: Component = () => {
  console.log("Test: " + index++);
  const [text, setText] = createSignal<string>('');

  return (
    <div class={styles.App}>
      <input type="text" value={text()} onInput={(e) => setText(e.currentTarget.value)}/>
      <div>{text()}</div>
      <Button variant="contained">Hello world</Button>
    </div>
  );
};

export default App;
