import {Component, For} from "solid-js";
import {translate} from "../../../../utils/languageAsync";
import {
  emailValue,
  openEditModal,
  passwordValue,
  pendingAdd,
  pendingEdit,
  setEmailValue,
  setOpenEditModal,
  setPasswordValue,
  setStoreId,
  setTypeValue,
  setUserNameValue,
  storeId,
  typeValue,
  userId,
  userNameValue
} from "../../stores/modalStore";
import ModalWrapper from "../../../../components/ModalWrapper";
import {checkUserReqForm} from "../../utils/formChecks";
import {UserRequest} from "../../../../dto/UserRequest";
import {usersStores} from "../../stores/adminStore";
import {updateUser} from "../../utils/usersAsync";

const EditUserModal: Component = () => {
  const setOpen = () => {
    setOpenEditModal(prev => !prev);
  }

  const handleOK = async () => {
    const user: UserRequest = {
      name: userNameValue(),
      password: passwordValue(),
      email: emailValue(),
      type: typeValue(),
      storeId: storeId() === "" ? undefined : +storeId()
    }
    if (!checkUserReqForm(user)) {
      alert(translate("fillAllFields"));
    } else {
      await updateUser(user, userId());
    }
  }

  return (
    <ModalWrapper
      name={() => translate("edit")}
      open={openEditModal}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={pendingEdit}
    >
      <p>{translate("userType")}</p>
      <select
        class="language-select"
        name="languageId"
        onChange={(e) => setTypeValue(e.currentTarget.value)}
        disabled={pendingAdd()}
      >
        <option selected={typeValue() === ""} value="default" disabled>-- {translate("select")} --</option>
        <option selected={typeValue() === "ADMIN"} value="ADMIN">{translate("admin").toUpperCase()}</option>
        <option selected={typeValue() === "USER"} value="USER">{translate("user").toUpperCase()}</option>
      </select>
      <p>{translate("store")}</p>
      <select
        class="language-select"
        name="languageId"
        onChange={(e) => setStoreId(e.currentTarget.value)}
        disabled={pendingAdd()}
      >
        <option
          value=""
          selected={storeId() === ""}
        >-- {translate("select")} --
        </option>
        <For each={usersStores()}>
          {
            (value) =>
              <option selected={storeId() === value.id.toString()} value={`${value.id}`}>{value.name}</option>
          }
        </For>
      </select>
      <p>{translate("userName")}</p>
      <input
        class="input-custom"
        type="text"
        value={userNameValue()}
        onChange={(e) => setUserNameValue(e.currentTarget.value)}
        disabled={pendingEdit()}/>
      <p>{translate("password")}</p>
      <input
        class="input-custom"
        type="text"
        value={passwordValue()}
        onChange={(e) => setPasswordValue(e.currentTarget.value)}
        disabled={pendingEdit()}/>
      <p>{translate("email")}</p>
      <input
        class="input-custom"
        type="text"
        value={emailValue()}
        onChange={(e) => setEmailValue(e.currentTarget.value)}
        disabled={pendingEdit()}/>
    </ModalWrapper>
  )
}

export default EditUserModal;
