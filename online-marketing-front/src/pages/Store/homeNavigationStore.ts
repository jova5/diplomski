import {createSignal} from "solid-js";
import StoreContent from "../Home/components/StoreContent";
import AddContent from "../Home/components/AddContent";

export const HomeNavValues = ["StoreContent", "AddContent",] as const;

export type HomeNavValue = typeof HomeNavValues[number];

export const HomeNavOptions = {
  StoreContent: StoreContent,
  AddContent: AddContent,
}

export const [homeNav, setHomeNav] = createSignal<HomeNavValue>(HomeNavValues[0]);
export const [login, setLogin] = createSignal<boolean>(false);
