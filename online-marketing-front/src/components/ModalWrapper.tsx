import {Component} from "solid-js";
import {Box, Button, Modal, Typography} from "@suid/material";
import './ModalWrapper.css';
import {translate} from "../pages/Admin/utils/languageAsync";

const ModalWrapper: Component<
  {
    name: () => string,
    children: any,
    open: () => boolean,
    setOpen: () => void,
    handleOK: () => void,
  }> = (props) => {
  return (
    <Modal
      open={props.open()}
      aria-describedby="modal-modal-description"
    >
      <Box class="modal">
        <p class={"modal-header"}>
          {props.name()}
        </p>
        <Typography id="modal-modal-description" sx={{mt: 2}}>
          {...props.children}
        </Typography>
        <div class="modal-options">
          <Button class="cancel" onClick={() => props.setOpen()}>{translate("cancel")}</Button>
          <Button class="ok" onClick={() => props.handleOK()}>{translate("ok")}</Button>
        </div>
      </Box>
    </Modal>
  )
}

export default ModalWrapper;
