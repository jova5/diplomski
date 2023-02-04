import {createStore} from "solid-js/store";
import {Store} from "../../../dto/Store";
import {Adds} from "../../../dto/Adds";
import {createSignal} from "solid-js";

export const [homeSearch, setHomeSearch] = createSignal<string>("");
export const [homeStores, setHomeStores] = createStore<Store[]>([]);
export const [renderedHomeStores, setRenderedHomeStores] = createStore<Store[]>([]);
export const [homeAdds, setHomeAdds] = createStore<Adds[]>([]);
export const [renderedHomeAdds, setRenderedHomeAdds] = createStore<Adds[]>([]);
export const [registerPending, setRegisterPending] = createSignal<boolean>(false);
export const [registerAddedStoreId, setRegisterAddedStoreId] = createSignal<number>(-1);
export const [registerAddedContactId, setRegisterAddedContactId] = createSignal<number>(-1);
