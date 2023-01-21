import {createSignal} from "solid-js";

export const [openHomeAddModal, setOpenHomeAddModal] = createSignal<boolean>(false);
export const [homeAddHeader, setHomeAddHeader] = createSignal<string>("");
export const [homeAddDescription, setHomeAddDescription] = createSignal<string>("");
export const [homeAddImage, setHomeAddImage] = createSignal<string>("");
export const [homeAddStoreName, setHomeAddStoreName] = createSignal<string>("");
export const [homeAddStoreId, setHomeAddStoreId] = createSignal<number>(-1);
