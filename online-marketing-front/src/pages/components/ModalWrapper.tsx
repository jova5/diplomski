import {Component} from "solid-js";
import {openNewLanguageModal} from "../Admin/components/modalStore";
import {Box, Button, Modal, Typography} from "@suid/material";
import './ModalWrapper.css';

const ModalWrapper: Component<
  {
    name: string,
    children: any,
    open: boolean,
    setOpen: () => void,
    handleOK: () => void,
  }> = (props) => {
  return (
    <Modal
      open={openNewLanguageModal()}
      aria-describedby="modal-modal-description"
    >
      <Box class="modal">
        <p class={"modal-header"}>
          {props.name}
        </p>
        <Typography id="modal-modal-description" sx={{mt: 2}}>
          {...props.children}
        </Typography>
        <div class="modal-options">
          <Button class="cancel" onClick={() => props.setOpen()}>Cancel</Button>
          <Button class="ok" onClick={() => props.handleOK()}>OK</Button>
        </div>
      </Box>
    </Modal>
  )
}

export default ModalWrapper;
