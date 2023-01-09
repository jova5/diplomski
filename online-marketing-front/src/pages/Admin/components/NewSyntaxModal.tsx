import {Component, createSignal, For} from "solid-js";
import {openNewSyntaxModal, setOpenNewSyntaxModal} from "../stores/modalStore";
import ModalWrapper from "../../../components/ModalWrapper";
import './NewSyntaxModal.css';
import {VocabularyRequest} from "../../../dto/VocabularyRequest";
import {availableLanguages} from "../stores/adminStore";
import {addSyntax} from "../utils/languageAsync";

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
      name={() => "New Syntax"}
      open={openNewSyntaxModal}
      setOpen={setOpen}
      handleOK={handleOK}
    >
      <p>Language</p>
      <select class="language-select" name="languageId" onChange={(e) => setLanguageId(e.currentTarget.value)}>
        <option value="default" selected disabled>-- Select --</option>
        <For each={availableLanguages()}>
          {
            (item) =>
              <option value={item.id}>{item.longName}</option>
          }
        </For>
      </select>
      <p>Key</p>
      <input
        class="input-custom"
        type="text"
        placeholder={"Key"}
        onChange={(e) => setKeyValue(e.currentTarget.value)}/>
      <p>Syntax</p>
      <input
        class="input-custom"
        type="text"
        placeholder={"Syntax"}
        onChange={(e) => setSyntaxValue(e.currentTarget.value)}/>
    </ModalWrapper>
  )
}

export default NewSyntaxModal;
