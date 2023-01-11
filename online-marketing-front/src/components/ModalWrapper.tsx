import {Component, Show} from "solid-js";
import {Box, Button, CircularProgress, Modal, Typography} from "@suid/material";
import './ModalWrapper.css';
import {translate} from "../pages/Admin/utils/languageAsync";

const ModalWrapper: Component<
  {
    name: () => string,
    children: any,
    open: () => boolean,
    setOpen: () => void,
    handleOK: () => void,
    pending: () => boolean,
  }> = (props) => {
  // console.log("pending: " + props.pending());
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
          <Show when={props.pending()} keyed>
            <CircularProgress size={30} color="secondary"/>
          </Show>
          <Show when={!props.pending()} keyed>
            <Button class="cancel" onClick={() => props.setOpen()} disabled={props.pending()}>
              {translate("cancel")}
            </Button>
            <Button class="ok" onClick={() => props.handleOK()}>
              {translate("ok")}
            </Button>
          </Show>
        </div>
      </Box>
    </Modal>
  )
}

export default ModalWrapper;
