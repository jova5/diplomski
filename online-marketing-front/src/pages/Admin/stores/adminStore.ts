import {createResource, createSignal} from "solid-js";
import {createStore} from "solid-js/store";
import {getLanguagesForTable} from "../utils/languageAsync";

export const [languages] = createResource(getLanguagesForTable, {initialValue: []});
export const [availableLanguages, setAvailableLanguages] = createSignal<any[]>([]);
export const [renderedLanguageList, setRenderedLanguageList] = createStore<any[]>([]);
export const [searchLanguage, setSearchLanguage] = createSignal<string>("");
