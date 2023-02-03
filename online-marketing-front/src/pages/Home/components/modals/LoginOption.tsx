import {Component} from "solid-js";
import {translate} from "../../../../utils/languageAsync";
import {
  homePendingLoginRegisterModal, setHomeEmail,
  setHomePassword, setHomeStoreName,
  setHomeUserName,
  setIsHomeLogin
} from "../../store/homeModalStore";

const LoginOption: Component = () => {
  return (
    <>
      <p style={{"margin-bottom": "0"}}>{translate("userName")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("userName")}
        value={""}
        onChange={(e) => setHomeUserName(e.currentTarget.value)}
        disabled={homePendingLoginRegisterModal()}/>
      <p style={{"margin-bottom": "0"}}>{translate("password")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("password")}
        value={""}
        onChange={(e) => setHomePassword(e.currentTarget.value)}
        disabled={homePendingLoginRegisterModal()}/>
      <button class="button-change-option" onClick={() => {
        setIsHomeLogin(false);
        setHomePassword("");
        setHomeUserName("");
        setHomeEmail("");
        setHomeStoreName("");
      }}>
        {translate("register")}
      </button>
    </>
  )
}

export default LoginOption;
