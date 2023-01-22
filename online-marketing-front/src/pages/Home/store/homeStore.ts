import {createStore} from "solid-js/store";
import {Store} from "../../../dto/Store";
import {Adds} from "../../../dto/Adds";
import {createSignal} from "solid-js";

export const [homeSearch, setHomeSearch] = createSignal<string>("");
export const [homeStores, setHomeStores] = createStore<Store[]>([]);
export const [renderedHomeStores, setRenderedHomeStores] = createStore<Store[]>([]);
export const [homeAdds, setHomeAdds] = createStore<Adds[]>([]);
export const [renderedHomeAdds, setRenderedHomeAdds] = createStore<Adds[]>([]);
