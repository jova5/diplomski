import {Component} from "solid-js";
import ModalWrapper from "../../components/ModalWrapper";

const ConfirmationModal: Component<
  {
    header: () => string,
    open: () => boolean,
    setOpen: (check: (prev: boolean) => boolean) => void,
    handleOK: () => void,
    message: () => string,
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
    >
      <p>{props.message}</p>
    </ModalWrapper>
  )
}

export default ConfirmationModal;
