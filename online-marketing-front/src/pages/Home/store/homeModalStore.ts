import {createSignal} from "solid-js";

export const [openHomeAddModal, setOpenHomeAddModal] = createSignal<boolean>(false);
export const [openHomeLoginRegisterModal, setOpenHomeLoginRegisterModal] = createSignal<boolean>(false);
export const [homePendingLoginRegisterModal, setHomePendingLoginRegisterModal] = createSignal<boolean>(false);
export const [isHomeLogin, setIsHomeLogin] = createSignal<boolean>(true);
export const [homeAddHeader, setHomeAddHeader] = createSignal<string>("");
export const [homeAddDescription, setHomeAddDescription] = createSignal<string>("");
export const [homeAddImage, setHomeAddImage] = createSignal<string>("");
export const [homeAddStoreName, setHomeAddStoreName] = createSignal<string>("");
export const [homeAddStoreId, setHomeAddStoreId] = createSignal<number>(-1);
export const [homeUserName, setHomeUserName] = createSignal<string>("");
export const [homePassword, setHomePassword] = createSignal<string>("");
export const [homeEmail, setHomeEmail] = createSignal<string>("");
export const [homeStoreName, setHomeStoreName] = createSignal<string>("");
