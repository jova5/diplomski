import {createSignal} from "solid-js";

export const [webSocketConnected, setWebSocketConnected] = createSignal<boolean>(false);
