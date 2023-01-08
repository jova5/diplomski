import {Component, createSignal} from "solid-js";
import {openNewLanguageModal, setOpenNewLanguageModal} from "./modalStore";
import "./NewLanguageModal.css";
import ModalWrapper from "../../components/ModalWrapper";

const NewLanguageModal: Component<{ name: string }> = (props) => {
  const [languageValue, setLanguageValue] = createSignal<string>("");
  const setOpen = () => {
    setOpenNewLanguageModal( prev => !prev);
  }

  const handleOK = () => {
    console.log(languageValue());
  }

  return (
    <div>
      <ModalWrapper
        name={props.name}
        open={openNewLanguageModal()}
        setOpen={ () => setOpen()}
        handleOK={() => handleOK()}
      >
        <input
          class="input-language"
          type="text"
          placeholder="Laguage"
          onChange={(e) => setLanguageValue(e.currentTarget.value)}/>
      </ModalWrapper>
      {/*<Modal*/}
      {/*  open={openNewLanguageModal()}*/}
      {/*  aria-describedby="modal-modal-description"*/}
      {/*>*/}
      {/*  <Box class="modal">*/}
      {/*    <p class={"modal-header"}>*/}
      {/*      {props.name}*/}
      {/*    </p>*/}
      {/*    <Typography id="modal-modal-description" sx={{mt: 2}}>*/}
      {/*      /!*<select onChange={(value) => setValue(value.currentTarget.value)}>*!/*/}
      {/*      /!*  <option>Open this select menu</option>*!/*/}
      {/*      /!*  <option value="1">One</option>*!/*/}
      {/*      /!*  <option value="2">Two</option>*!/*/}
      {/*      /!*  <option value="3">Three</option>*!/*/}
      {/*      /!*</select>*!/*/}
      {/*      /!*<label>New Language</label>*!/*/}
      {/*      <input class="input-language" type="text" placeholder="Laguage"/>*/}
      {/*    </Typography>*/}
      {/*    <div class="modal-options">*/}
      {/*      <Button class="cancel" onClick={() => setOpenNewLanguageModal(false)}>Cancel</Button>*/}
      {/*      <Button class="ok">OK</Button>*/}
      {/*    </div>*/}
      {/*  </Box>*/}
      {/*</Modal>*/}
    </div>
  )
}

export default NewLanguageModal;
