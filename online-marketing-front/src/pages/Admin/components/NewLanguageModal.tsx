import {Component, createSignal} from "solid-js";
import {openNewLanguageModal, setOpenNewLanguageModal} from "../stores/modalStore";
import "./NewLanguageModal.css";
import ModalWrapper from "../../components/ModalWrapper";

const NewLanguageModal: Component = () => {
  const [languageValue, setLanguageValue] = createSignal<string>("");
  const setOpen = () => {
    setOpenNewLanguageModal(prev => !prev);
  }

  const handleOK = () => {
    console.log(languageValue());
  }

  return (
    <ModalWrapper
      name={() => "New Language Modal"}
      open={openNewLanguageModal}
      setOpen={setOpen}
      handleOK={handleOK}
    >
      <input
        class="input-language"
        type="text"
        placeholder="Language"
        onChange={(e) => setLanguageValue(e.currentTarget.value)}/>
    </ModalWrapper>
  )
}

export default NewLanguageModal;
