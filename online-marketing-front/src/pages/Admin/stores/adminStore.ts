import {createSignal} from "solid-js";
import {createStore} from "solid-js/store";

export const [availableLanguages, setAvailableLanguages] = createSignal<any[]>([]);
export const [renderedLanguageList, setRenderedLanguageList] = createStore<any[]>([]);
