import {Component, For, Show} from "solid-js";
import "./StoreAdds.css";
import {storeStore} from "../store/storeStore";
import StoreAddOptions from "./StoreAddOptions";

const StoreAdds: Component = () => {
  return (
    <div class="content-container-grid">
      <Show when={storeStore()?.adds !== undefined}
            fallback={<div>Loading...</div>} keyed>
        <For each={storeStore()?.adds}>
          {
            value => (
              <div class="card">
                <StoreAddOptions
                  header={value.header}
                  description={value.description}
                  premium={value.premium}
                  image={value.image}
                  addId={value.id}
                />
                <Show when={value.image}
                      fallback={<img src={"../../../../../assets/reklama.png"} height={230} alt="Reklama"/>} keyed>
                  <img src={value.image}
                       height={230}
                       alt={value.header}
                  />
                </Show>
                <div style={{padding: '10px'}}>
                  <div class="header">
                    <p style={{margin: '0', 'font-weight': 600}}>{value.header}</p>
                  </div>
                  <div class="description">
                    <p>{value.description}</p>
                  </div>
                </div>
              </div>
            )
          }
        </For>
      </Show>
    </div>
  )
}

export default StoreAdds;
