import {Component, For} from "solid-js";
import "./ContentContainer.css";

const cards = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'TWELVE'];

const ContentContainer: Component = () => {
  return (
    <div class="content-container">
        <div class="content-container-grid">
          <For each={cards}>
            {
              value =>
                <div class="card">{value}</div>
            }
          </For>
        </div>
    </div>
  )
}

export default ContentContainer;
