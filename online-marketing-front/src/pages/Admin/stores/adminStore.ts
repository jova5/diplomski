import {createSignal} from "solid-js";
import {createStore} from "solid-js/store";
import {User} from "../../../dto/User";

export const [users, setUsers] = createSignal<User[]>();
export const [availableLanguages, setAvailableLanguages] = createSignal<any[]>([]);
export const [renderedLanguageList, setRenderedLanguageList] = createStore<any[]>([]);
export const [languages, setLanguages] = createStore<any[]>([]);
export const [searchLanguage, setSearchLanguage] = createSignal<string>("");
export const [searchUser, setSearchUser] = createSignal<string>("");
export const [searchStore, setSearchStore] = createSignal<string>("");
export const [searchCategory, setSearchCategory] = createSignal<string>("");
export const [searchAdd, setSearchAdd] = createSignal<string>("");
