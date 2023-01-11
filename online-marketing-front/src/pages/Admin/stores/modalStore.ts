import {createSignal} from "solid-js";

export const [openNewSyntaxModal, setOpenNewSyntaxModal] = createSignal<boolean>(false);
export const [pendingAddSyntax, setPendingAddSyntax] = createSignal<boolean>(false);
export const [openDeleteSyntaxModal, setOpenDeleteSyntaxModal] = createSignal<boolean>(false);
export const [pendingDeleteSyntax, setPendingDeleteSyntax] = createSignal<boolean>(false);
export const [openEditSyntaxModal, setOpenEditSyntaxModal] = createSignal<boolean>(false);
export const [pendingEditSyntax, setPendingEditSyntax] = createSignal<boolean>(false);
export const [syntaxId, setSyntaxId] = createSignal<number>(-1);
export const [syntaxKey, setSyntaxKey] = createSignal<string>("");
export const [syntaxLanguageId, setSyntaxLanguageId] = createSignal<number>(-1);
export const [syntaxValue, setSyntaxValue] = createSignal<string>("");

