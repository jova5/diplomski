import {createStore} from "solid-js/store";
import {Adds} from "../../../dto/Adds";
import {Store} from "../../../dto/Store";
import {createSignal} from "solid-js";

export const [storeStore, setStoreStore] = createSignal<Store>();
export const [storeAdds, setStoreAdds] = createStore<Adds[]>([]);
export const [renderedHomeAdds, setRenderedHomeAdds] = createStore<Adds[]>([]);
