import {createSignal} from "solid-js";
import {createStore} from "solid-js/store";

export const [openNewLanguageModal, setOpenNewLanguageModal] = createSignal<boolean>(false);
export const [openNewSyntaxModal, setOpenNewSyntaxModal] = createSignal<boolean>(false);
export const [availableLanguages, setAvailableLanguages] = createSignal<any[]>([]);
export const [renderedLanguageList, setRenderedLanguageList] = createStore<any[]>([]);
