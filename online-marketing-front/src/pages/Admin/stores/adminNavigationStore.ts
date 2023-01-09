import {createSignal} from "solid-js";
import Users from "../Users";
import Stores from "../Stores";
import Categories from "../Categories";
import Language from "../Language";
import Adds from "../Adds";

export const NavValues = ["Users", "Stores", "Categories", "Adds", "Language"] as const;

export type NavValue = typeof NavValues[number];

export const NavOptions = {
  Users: Users,
  Stores: Stores,
  Categories: Categories,
  Adds: Adds,
  Language: Language
}

export const [nav, setNav] = createSignal<NavValue>(NavValues[4]);
export const [logOut, setLogOut] = createSignal<boolean>(false);
