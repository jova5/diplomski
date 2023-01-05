import {createSignal} from "solid-js";
import Users from "./components/Users";
import Stores from "./components/Stores";
import Categories from "./components/Categories";
import Language from "./components/Language";

export const NavValues = ["Users", "Stores", "Categories", "Language"] as const;

export type NavValue = typeof NavValues[number];

export const NavOptions = {
  Users: Users,
  Stores: Stores,
  Categories: Categories,
  Language: Language
}

export const [nav, setNav] = createSignal<NavValue>(NavValues[0]);
export const [logOut, setLogOut] = createSignal<boolean>(false);
