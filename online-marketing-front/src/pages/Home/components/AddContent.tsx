import {Component, createEffect, For, onMount, Show} from "solid-js";
import {
  homeAdds,
  homeSearch,
  renderedHomeAdds,
  setHomeAdds,
  setHomeSearch,
  setRenderedHomeAdds
} from "../store/homeStore";
import {getAdds} from "../../../utils/addAsync";
import {setUsersStores} from "../../Admin/stores/adminStore";
import {getUsersStore} from "../../Admin/utils/usersAsync";
import HomeAddModal from "./HomeAddModal";
import {
  setHomeAddDescription,
  setHomeAddHeader,
  setHomeAddImage,
  setHomeAddStoreId,
  setHomeAddStoreName,
  setOpenHomeAddModal
} from "../store/homeModalStore";

const AddContent: Component = () => {
  console.log("Home/AddContent")

  onMount(async () => {
    setHomeSearch("");
    if (homeAdds.length === 0) {
      setUsersStores(await getUsersStore());
      setHomeAdds(await getAdds());
      setRenderedHomeAdds(homeAdds);
    }
  })

  createEffect(() => {
    const homeAddList: any[] = homeAdds.filter((add: any) => {
      return add.header.toLocaleLowerCase().includes(homeSearch().toLocaleLowerCase()) ||
        add.description.toLocaleLowerCase().includes(homeSearch().toLocaleLowerCase())
    })
    setRenderedHomeAdds(homeAddList);
  })

  return (
    <>
      <div class="content-container-grid">
        <Show when={renderedHomeAdds.length > 0}
              fallback={<div>Loading...</div>} keyed>
          <For each={renderedHomeAdds}>
            {
              value => (
                <div class="card"
                     onClick={() => {
                       setHomeAddImage(value.image);
                       setHomeAddHeader(value.header);
                       setHomeAddDescription(value.description);
                       setHomeAddStoreName(value.storeName!);
                       setHomeAddStoreId(value.storeId);
                       setOpenHomeAddModal(true);
                     }}
                >
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
      <HomeAddModal/>
    </>
  )
}

export default AddContent;
