import {Component, createSignal, onCleanup, onMount} from "solid-js";
import {setStoreStore} from "../Store/store/storeStore";
import {getStoreById} from "../../utils/storeAsync";

const list = ["VISIT_STORE", "VISIT_ADD", "RATE_STORE"];

const UserSimulation: Component = () => {
  const [count, setCount] = createSignal(0);

  const timer = setInterval(() => setCount(count() + 1), 1000);

  const randomVisit = () => {
    const random = Math.floor(Math.random() * 3);

    switch (list[random]){
      case "VISIT_STORE": break;
      case "VISIT_ADD": break;
      case "RATE_STORE": break;
      default: break;
    }
  }

  onMount(async () => {
    setStoreStore(await getStoreById(12));
  })

  onCleanup(() => clearInterval(timer));

  return(
    <>
      <div>Hello World</div>
    </>
  )
}

export default UserSimulation;
