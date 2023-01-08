import {Component, createSignal} from "solid-js";
import {openNewSyntaxModal, setOpenNewSyntaxModal} from "./modalStore";
import ModalWrapper from "../../components/ModalWrapper";
import './NewSyntaxModal.css';

const NewSyntaxModal: Component = () => {
  const [languageValue, setLanguageValue] = createSignal<string>("");
  const setOpen = () => {
    setOpenNewSyntaxModal( prev => !prev);
  }

  const handleOK = () => {

  }

  return(
    <ModalWrapper
      name={"New Syntax"}
      open={openNewSyntaxModal()}
      setOpen={ () => setOpen()}
      handleOK={() => handleOK()}
    >
      <input
        class="input-custom"
        type="text"
        placeholder="Serbian"
        onChange={(e) => setLanguageValue(e.currentTarget.value)}/>
      <input
        class="input-custom"
        type="text"
        placeholder="English"
        onChange={(e) => setLanguageValue(e.currentTarget.value)}/>
    </ModalWrapper>
  )
}

export default NewSyntaxModal;
