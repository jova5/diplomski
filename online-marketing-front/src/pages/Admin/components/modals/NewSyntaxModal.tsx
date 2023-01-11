import {Component, createSignal, For} from "solid-js";
import {openAddModal, pendingAdd, setOpenAddModal} from "../../stores/modalStore";
import ModalWrapper from "../../../../components/ModalWrapper";
import './NewSyntaxModal.css';
import {VocabularyRequest} from "../../../../dto/VocabularyRequest";
import {availableLanguages} from "../../stores/adminStore";
import {addSyntax, translate} from "../../utils/languageAsync";
import {checkNewSyntaxForm} from "../../utils/formChecks";

const NewSyntaxModal: Component = () => {
  const [languageId, setLanguageId] = createSignal<string>("");
  const [syntaxValue, setSyntaxValue] = createSignal<string>("");
  const [keyValue, setKeyValue] = createSignal<string>("");
  const setOpen = () => {
    setLanguageId("");
    setSyntaxValue("");
    setKeyValue("");
    setOpenAddModal(prev => !prev);
  }

  const handleOK = async () => {
    const vocabulary: VocabularyRequest = {
      languageId: +languageId(),
      key: keyValue(),
      meaning: syntaxValue()
    }
    if (!checkNewSyntaxForm(languageId(), keyValue(), syntaxValue())) {
      alert(translate("fillAllFields"));
    } else {
      await addSyntax(vocabulary, +languageId());
      setLanguageId("");
    }
  }

  return (
    <ModalWrapper
      name={() => translate("addSyntax")}
      open={openAddModal}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={pendingAdd}
    >
      <p>{translate("language")}</p>
      <select
        class="language-select"
        name="languageId"
        onChange={(e) => setLanguageId(e.currentTarget.value)}
        disabled={pendingAdd()}
      >
        <option
          value="default"
          selected={languageId() === ""}
          disabled
        >-- {translate("select")} --
        </option>
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
        onChange={(e) => setKeyValue(e.currentTarget.value)}
        disabled={pendingAdd()}/>
      <p>{translate("syntax")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("syntax")}
        onChange={(e) => setSyntaxValue(e.currentTarget.value)}
        disabled={pendingAdd()}/>
    </ModalWrapper>
  )
}

export default NewSyntaxModal;
