import {Component} from "solid-js";
import ModalWrapper from "../../../../components/ModalWrapper";

const ConfirmationModal: Component<
  {
    header: () => string,
    open: () => boolean,
    setOpen: (check: (prev: boolean) => boolean) => void,
    handleOK: () => void,
    message: () => string,
    pending: () => boolean
  }> = (props) => {
  const setCustomOpen = () => {
    props.setOpen((prev: boolean) => !prev);
  }

  return (
    <ModalWrapper
      name={props.header}
      open={props.open}
      setOpen={setCustomOpen}
      handleOK={props.handleOK}
      pending={props.pending}
    >
      <p>{props.message}</p>
    </ModalWrapper>
  )
}

export default ConfirmationModal;
