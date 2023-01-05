import {createSignal} from "solid-js";
import Users from "./components/Users";
import Stores from "./components/Stores";
import Categories from "./components/Categories";
import LogOut from "./components/LogOut";

export const NavValues = ["Users", "Stores", "Categories", "LogOut"] as const;

export type NavValue = typeof NavValues[number];

export const NavOptions = {
  Users: Users,
  Stores: Stores,
  Categories: Categories,
  LogOut: LogOut
}

export const [nav, setNav] = createSignal<NavValue>(NavValues[0]);
