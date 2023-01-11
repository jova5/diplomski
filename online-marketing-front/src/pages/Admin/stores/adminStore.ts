import {createResource, createSignal} from "solid-js";
import {createStore} from "solid-js/store";
import {getLanguagesForTable} from "../utils/languageAsync";

export const [languages, {refetch}] = createResource(getLanguagesForTable, {initialValue: []});
export const [availableLanguages, setAvailableLanguages] = createSignal<any[]>([]);
export const [renderedLanguageList, setRenderedLanguageList] = createStore<any[]>([]);
export const [searchLanguage, setSearchLanguage] = createSignal<string>("");
export const [searchUser, setSearchUser] = createSignal<string>("");
export const [searchStore, setSearchStore] = createSignal<string>("");
export const [searchCategory, setSearchCategory] = createSignal<string>("");
export const [searchAdd, setSearchAdd] = createSignal<string>("");
