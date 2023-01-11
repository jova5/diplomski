import {createSignal} from "solid-js";

export const [openAddModal, setOpenAddModal] = createSignal<boolean>(false);
export const [pendingAdd, setPendingAdd] = createSignal<boolean>(false);
export const [pendingDelete, setPendingDelete] = createSignal<boolean>(false);
export const [openEditModal, setOpenEditModal] = createSignal<boolean>(false);
export const [pendingEdit, setPendingEdit] = createSignal<boolean>(false);
export const [syntaxId, setSyntaxId] = createSignal<number>(-1);
export const [syntaxKey, setSyntaxKey] = createSignal<string>("");
export const [syntaxLanguageId, setSyntaxLanguageId] = createSignal<number>(-1);
export const [syntaxValue, setSyntaxValue] = createSignal<string>("");
export const [openDelete, setOpenDelete] = createSignal<boolean>(false);

