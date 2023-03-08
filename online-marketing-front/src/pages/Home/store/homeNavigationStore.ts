import {createSignal} from "solid-js";
import StoreContent from "../components/StoreContent";
import AddContent from "../components/AddContent";

export const HomeNavValues = ["storeContent", "addContent",] as const;

export type HomeNavValue = typeof HomeNavValues[number];

export const HomeNavOptions = {
  storeContent: StoreContent,
  addContent: AddContent,
}

export const [homeNav, setHomeNav] = createSignal<HomeNavValue>(HomeNavValues[0]);
