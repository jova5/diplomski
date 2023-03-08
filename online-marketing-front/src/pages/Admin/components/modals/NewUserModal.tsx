import {Component, createSignal, For} from "solid-js";
import {addSyntax, translate} from "../../../../utils/languageAsync";
import {openAddModal, pendingAdd, setOpenAddModal} from "../../stores/modalStore";
import ModalWrapper from "../../../../components/ModalWrapper";
import {checkUserReqForm} from "../../utils/formChecks";
import {UserRequest} from "../../../../dto/UserRequest";
import {addUser} from "../../utils/usersAsync";
import {usersStores} from "../../stores/adminStore";

const NewUserModal: Component = () => {
  const [userName, setUserName] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");
  const [email, setEmail] = createSignal<string>("");
  const [type, setType] = createSignal<string>("");
  const [store, setStore] = createSignal<string>("");
  const setOpen = () => {
    setOpenAddModal(prev => !prev);
  }

  const handleOK = async () => {
    const user: UserRequest = {
      name: userName(),
      password: password(),
      email: email(),
      type: type(),
      storeId: store() === "" ? undefined : +store()
    }
    if (!checkUserReqForm(user)) {
      alert(translate("fillAllFields"));
    } else {
      await addUser(user);
    }
  }

  return (
    <ModalWrapper
      name={() => translate("addSyntax")}
      open={openAddModal}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={pendingAdd}
    >
      <p>{translate("userType")}</p>
      <select
        class="language-select"
        name="languageId"
        onChange={(e) => setType(e.currentTarget.value)}
        disabled={pendingAdd()}
      >
        <option
          value="default"
          selected={type() === ""}
          disabled
        >-- {translate("select")} --
        </option>
        <option value="ADMIN">{translate("admin").toUpperCase()}</option>
        <option value="USER">{translate("user").toUpperCase()}</option>
      </select>
      <p>{translate("store")}</p>
      <select
        class="language-select"
        name="languageId"
        onChange={(e) => setStore(e.currentTarget.value)}
        disabled={pendingAdd()}
      >
        <option
          value=""
          selected
        >-- {translate("select")} --
        </option>
        <For each={usersStores()}>
          {
            (value) =>
              <option value={`${value.id}`}>{value.name}</option>
          }
        </For>
      </select>
      <p>{translate("userName")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("userName")}
        onChange={(e) => setUserName(e.currentTarget.value)}
        disabled={pendingAdd()}/>
      <p>{translate("password")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("password")}
        onChange={(e) => setPassword(e.currentTarget.value)}
        disabled={pendingAdd()}/>
      <p>{translate("email")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("email")}
        onChange={(e) => setEmail(e.currentTarget.value)}
        disabled={pendingAdd()}/>
    </ModalWrapper>
  )
}

export default NewUserModal;
