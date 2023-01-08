import {createSignal} from "solid-js";

export const [openNewLanguageModal, setOpenNewLanguageModal] = createSignal<boolean>(false);
export const [openNewSyntaxModal, setOpenNewSyntaxModal] = createSignal<boolean>(false);
