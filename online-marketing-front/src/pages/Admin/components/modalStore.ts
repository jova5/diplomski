import {createSignal} from "solid-js";

export const [openNewLanguageModal, setOpenNewLanguageModal] = createSignal<boolean>(false);
export const [openNewSyntaxModal, setOpenNewSyntaxModal] = createSignal<boolean>(false);
export const [availableLanguages, setAvailableLanguages] = createSignal<any[]>([]);
export const [renderedLanguageList, setRenderedLanguageList] = createSignal<any[]>([]);
