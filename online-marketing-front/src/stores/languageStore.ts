import {createResource, createSignal} from "solid-js";
import {getTranslation} from "../utils/languageAsync";

export const [selectedLanguageId, setSelectedLanguageId] = createSignal<number>(1);

export const [translation] = createResource(selectedLanguageId ,getTranslation);
