import {Component, createEffect, For, onMount, Show} from "solid-js";
import {
  homeSearch,
  homeStores,
  renderedHomeStores,
  setHomeSearch,
  setHomeStores,
  setRenderedHomeStores
} from "../../Store/homeStore";
import {getStore} from "../../../utils/storeAsync";

const StoreContent: Component = () => {
  console.log("Home/StoreContent")

  onMount(async () => {
    setHomeSearch("");
    if (homeStores.length === 0) {
      setHomeStores(await getStore());
      setRenderedHomeStores(homeStores);
    }
  })

  createEffect(() => {
    const homeStoreList: any[] = homeStores.filter((store: any) => {
      return store.name.toLocaleLowerCase().includes(homeSearch().toLocaleLowerCase()) ||
        store.description.toLocaleLowerCase().includes(homeSearch().toLocaleLowerCase())
    })
    setRenderedHomeStores(homeStoreList);
  })

  return (
    <div class="content-container-grid">
      <Show when={renderedHomeStores.length > 0}
            fallback={<div>Loading...</div>} keyed>
        <For each={renderedHomeStores}>
          {
            value => (
              <div class="card">
                <Show when={value.storeImage}
                      fallback={<img src={"../../../../../assets/prodavnica.png"} height={230} alt="Prodavnica"/>}
                      keyed>
                  <img src={value.storeImage}
                       height={230}
                       alt={value.name}
                  />
                </Show>
                <div style={{padding: '10px'}}>
                  <div class="header">
                    <p style={{margin: '0', 'font-weight': 600}}>{value.name}</p>
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

export default StoreContent;
