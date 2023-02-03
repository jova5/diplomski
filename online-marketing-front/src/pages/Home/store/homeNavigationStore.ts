import {createSignal} from "solid-js";
import StoreContent from "../components/StoreContent";
import AddContent from "../components/AddContent";

export const HomeNavValues = ["StoreContent", "AddContent",] as const;

export type HomeNavValue = typeof HomeNavValues[number];

export const HomeNavOptions = {
  StoreContent: StoreContent,
  AddContent: AddContent,
}

export const [homeNav, setHomeNav] = createSignal<HomeNavValue>(HomeNavValues[0]);
