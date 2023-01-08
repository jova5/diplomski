import {Component, createSignal, For} from "solid-js";
import {availableLanguages, openNewSyntaxModal, setOpenNewSyntaxModal, setRenderedLanguageList} from "./modalStore";
import ModalWrapper from "../../components/ModalWrapper";
import './NewSyntaxModal.css';
import {VocabularyRequest} from "../../dto/VocabularyRequest";
import {produce} from "solid-js/store";

const NewSyntaxModal: Component = () => {
  const [languageId, setLanguageId] = createSignal<string>("");
  const [syntaxValue, setSyntaxValue] = createSignal<string>("");
  const [keyValue, setKeyValue] = createSignal<string>("");
  const setOpen = () => {
    setOpenNewSyntaxModal(prev => !prev);
  }

  const handleOK = () => {
    const vocabulary: VocabularyRequest = {
      languageId: +languageId(),
      key: keyValue(),
      meaning: syntaxValue()
    }

    fetch('http://127.0.0.1:8080/vocabulary',
      {
        method: 'POST',
        body: JSON.stringify(vocabulary),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
          setRenderedLanguageList(
            produce((todos) => {
              todos.push({
                id: data.id,
                key: data.key,
                meaning: data.meaning,
                shortName: availableLanguages().find((item) => item.id === +languageId()).shortName
              });
            }),
          )
        }
      )
  }

  // createEffect(() => {
  //   console.log("update");
  //   console.log(renderedLanguageList);
  // });

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
