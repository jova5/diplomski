import {createSignal} from "solid-js";

export const [openNewLanguageModal, setOpenNewLanguageModal] = createSignal<boolean>(false);
export const [openNewSyntaxModal, setOpenNewSyntaxModal] = createSignal<boolean>(false);
export const [openDeleteModal, setOpenDeleteModal] = createSignal<boolean>(false);
export const [syntaxId, setSyntaxId] = createSignal<number>(-1);
export const [syntaxKey, setSyntaxKey] = createSignal<string>("");
