import {Component} from "solid-js";
import "./Admin.css";
import Navbar from "./components/Navbar";
import {nav, NavOptions} from "./adminNavigationStore";
import {Dynamic} from "solid-js/web";

const Admin: Component = () => {
  return (
    <>
      <Navbar/>
      {/*<Routes>*/}
      {/*  <Route path="/users" element={<div>This is Users</div>} />*/}
      {/*  <Route path="/stores" element={<div>This is Stores</div>} />*/}
      {/*  <Route path="/categories" element={<div>This is Categories</div>} />*/}
      {/*  <Route path="/logout" element={<div>This is LogOut</div>} />*/}
      {/*</Routes>*/}
      <Dynamic component={NavOptions[nav()]}/>
      {/*<Switch fallback={<p>Greska</p>}>*/}
      {/*<For each={NavValues}>*/}
      {/*  {*/}
      {/*    (value) =>*/}
      {/*      <Match when={nav() === value} keyed>*/}
      {/*        <div>This is {nav()}</div>*/}
      {/*      </Match>*/}
      {/*  }*/}
      {/*</For>*/}

      {/*<Match when={nav() === "Users"} keyed>*/}
      {/*  <div>This is Users</div>*/}
      {/*</Match>*/}
      {/*<Match when={nav() === "Stores"} keyed>*/}
      {/*  <div>This is Stores</div>*/}
      {/*</Match>*/}
      {/*<Match when={nav() === "Categories"} keyed>*/}
      {/*  <div>This is Categories</div>*/}
      {/*</Match>*/}
      {/*<Match when={nav() === "LogOut"} keyed>*/}
      {/*  <div>This is LogOut</div>*/}
      {/*</Match>*/}
      {/*</Switch>*/}
    </>
  )
}

export default Admin;
