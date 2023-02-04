import {createSignal} from "solid-js";

export const [storeOpenAddressEdit, setStoreOpenAddressEdit] = createSignal<boolean>(false);
export const [storeOpenNameEdit, setStoreOpenNameEdit] = createSignal<boolean>(false);
export const [storeOpenPhoneEdit, setStoreOpenPhoneEdit] = createSignal<boolean>(false);
export const [storeOpenEmailEdit, setStoreOpenEmailEdit] = createSignal<boolean>(false);
export const [storeOpenHeaderImageEdit, setStoreOpenHeaderImageEdit] = createSignal<boolean>(false);
export const [storeOpenImageEdit, setStoreOpenImageEdit] = createSignal<boolean>(false);
export const [storeOpenAddEdit, setStoreOpenAddEdit] = createSignal<boolean>(false);
export const [storeDeleteAddModal, setStoreDeleteAddModal] = createSignal<boolean>(false);
export const [storeDeleteAddPending, setStoreDeleteAddPending] = createSignal<boolean>(false);
export const [storePendingEdit, setStorePendingEdit] = createSignal<boolean>(false);
export const [storeEditSingleProperty, setStoreEditSingleProperty] = createSignal<string>("");
export const [storeAddHeader, setStoreAddHeader] = createSignal<string>("");
export const [storeAddDescription, setStoreAddDescription] = createSignal<string>("");
export const [storeAddImage, setStoreAddImage] = createSignal<string>("");
export const [storeAddPremium, setStoreAddPremium] = createSignal<boolean>(false);
export const [storeAddId, setStoreAddId] = createSignal<number>(-1);
