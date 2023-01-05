import {createSignal} from "solid-js";
import Users from "./components/Users";
import Stores from "./components/Stores";
import Categories from "./components/Categories";

export const NavValues = ["Users", "Stores", "Categories"] as const;

export type NavValue = typeof NavValues[number];

export const NavOptions = {
  Users: Users,
  Stores: Stores,
  Categories: Categories,
}

export const [nav, setNav] = createSignal<NavValue>(NavValues[0]);
export const [logOut, setLogOut] = createSignal<boolean>(false);
