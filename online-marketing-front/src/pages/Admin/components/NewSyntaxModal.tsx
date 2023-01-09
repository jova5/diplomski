import {Component, createSignal, For} from "solid-js";
import {openNewSyntaxModal, setOpenNewSyntaxModal} from "../stores/modalStore";
import ModalWrapper from "../../../components/ModalWrapper";
import './NewSyntaxModal.css';
import {VocabularyRequest} from "../../../dto/VocabularyRequest";
import {availableLanguages} from "../stores/adminStore";
import {addSyntax, translate} from "../utils/languageAsync";

const NewSyntaxModal: Component = () => {
  const [languageId, setLanguageId] = createSignal<string>("");
  const [syntaxValue, setSyntaxValue] = createSignal<string>("");
  const [keyValue, setKeyValue] = createSignal<string>("");
  const setOpen = () => {
    setOpenNewSyntaxModal(prev => !prev);
  }

  const handleOK = async () => {
    const vocabulary: VocabularyRequest = {
      languageId: +languageId(),
      key: keyValue(),
      meaning: syntaxValue()
    }
    await addSyntax(vocabulary, +languageId());
  }

  return (
    <ModalWrapper
      name={() => translate("addSyntax")}
      open={openNewSyntaxModal}
      setOpen={setOpen}
      handleOK={handleOK}
    >
      <p>{translate("language")}</p>
      <select class="language-select" name="languageId" onChange={(e) => setLanguageId(e.currentTarget.value)}>
        <option value="default" selected disabled>-- {translate("select")} --</option>
        <For each={availableLanguages()}>
          {
            (item) =>
              <option value={item.id}>{item.longName}</option>
          }
        </For>
      </select>
      <p>{translate("key")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("key")}
        onChange={(e) => setKeyValue(e.currentTarget.value)}/>
      <p>{translate("syntax")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("syntax")}
        onChange={(e) => setSyntaxValue(e.currentTarget.value)}/>
    </ModalWrapper>
  )
}

export default NewSyntaxModal;
