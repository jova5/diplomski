import {Component, createSignal} from "solid-js";
import {addSyntax, translate} from "../../utils/languageAsync";
import {openNewUserModal, pendingAddUser, setOpenNewUserModal} from "../../stores/modalStore";
import ModalWrapper from "../../../../components/ModalWrapper";
import {checkNewUserForm} from "../../utils/formChecks";
import {UserRequest} from "../../../../dto/UserRequest";

const NewUserModal: Component = () => {
  const [userNameValue, setUserNameValue] = createSignal<string>("");
  const [passwordValue, setPasswordValue] = createSignal<string>("");
  const [emailValue, setEmailValue] = createSignal<string>("");
  const [typeValue, setTypeValue] = createSignal<string>("");
  const setOpen = () => {
    setOpenNewUserModal(prev => !prev);
  }

  const handleOK = async () => {
    const user: UserRequest = {
      name: userNameValue(),
      password: passwordValue(),
      email: emailValue(),
      type: typeValue()
    }
    if (!checkNewUserForm(user)) {
      alert(translate("fillAllFields"));
    } else {
    }
  }

  return (
    <ModalWrapper
      name={() => translate("addSyntax")}
      open={openNewUserModal}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={pendingAddUser}
    >
      <p>{translate("userType")}</p>
      <select
        class="language-select"
        name="languageId"
        onChange={(e) => setTypeValue(e.currentTarget.value)}
        disabled={pendingAddUser()}
      >
        <option
          value="default"
          selected={typeValue() === ""}
          disabled
        >-- {translate("select")} --
        </option>
        <option value="ADMIN">{translate("admin").toUpperCase()}</option>
        <option value="USER">{translate("user").toUpperCase()}</option>
      </select>
      <p>Dodati opciju za selektovanje prodavnica!!!!!!</p>
      <p>{translate("userName")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("userName")}
        onChange={(e) => setUserNameValue(e.currentTarget.value)}
        disabled={pendingAddUser()}/>
      <p>{translate("password")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("password")}
        onChange={(e) => setPasswordValue(e.currentTarget.value)}
        disabled={pendingAddUser()}/>
      <p>{translate("email")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("email")}
        onChange={(e) => setEmailValue(e.currentTarget.value)}
        disabled={pendingAddUser()}/>
    </ModalWrapper>
  )
}

export default NewUserModal;
