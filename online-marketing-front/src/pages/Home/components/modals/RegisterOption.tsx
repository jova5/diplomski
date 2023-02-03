import {Component} from "solid-js";
import {translate} from "../../../../utils/languageAsync";
import {
  homePendingLoginRegisterModal,
  setHomeEmail,
  setHomePassword,
  setHomeStoreName,
  setHomeUserName,
  setIsHomeLogin
} from "../../store/homeModalStore";

const RegisterOption: Component = () => {
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
      <p style={{"margin-bottom": "0"}}>{translate("email")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("email")}
        value={""}
        onChange={(e) => setHomeEmail(e.currentTarget.value)}
        disabled={homePendingLoginRegisterModal()}/>
      <p style={{"margin-bottom": "0"}}>{translate("password")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("password")}
        value={""}
        onChange={(e) => setHomePassword(e.currentTarget.value)}
        disabled={homePendingLoginRegisterModal()}/>
      <p style={{"margin-bottom": "0"}}>{translate("storeName")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("storeName")}
        value={""}
        onChange={(e) => setHomeStoreName(e.currentTarget.value)}
        disabled={homePendingLoginRegisterModal()}/>
      <button class="button-change-option" onClick={() => {
        setIsHomeLogin(true);
        setHomePassword("");
        setHomeUserName("");
      }}>
        {translate("login")}
      </button>
    </>
  )
}

export default RegisterOption;
