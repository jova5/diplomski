import {Component} from "solid-js";
import {translate} from "../../utils/languageAsync";
import {
  emailValue,
  openEditModal,
  passwordValue,
  pendingAdd,
  pendingEdit,
  setEmailValue,
  setOpenEditModal,
  setPasswordValue,
  setTypeValue,
  setUserNameValue,
  syntaxKey,
  syntaxLanguageId,
  syntaxValue,
  typeValue,
  userNameValue
} from "../../stores/modalStore";
import ModalWrapper from "../../../../components/ModalWrapper";
import {VocabularyRequest} from "../../../../dto/VocabularyRequest";
import {checkEditSyntaxForm} from "../../utils/formChecks";

const EditUserModal: Component = () => {
  const setOpen = () => {
    setOpenEditModal(prev => !prev);
  }

  const handleOK = async () => {
    const vocabulary: VocabularyRequest = {
      languageId: syntaxLanguageId(),
      key: syntaxKey(),
      meaning: syntaxValue()
    }
    if (!checkEditSyntaxForm(syntaxKey(), syntaxValue())) {
      alert(translate("fillAllFields"));
    } else {

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
        <option value="default" disabled>-- {translate("select")} --</option>
        <option selected={typeValue() === "ADMIN"} value="ADMIN">{translate("admin").toUpperCase()}</option>
        <option selected={typeValue() === "USER"} value="USER">{translate("user").toUpperCase()}</option>
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
