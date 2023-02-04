import {Component, Show} from "solid-js";
import {translate} from "../../../../utils/languageAsync";
import ModalWrapper from "../../../../components/ModalWrapper";
import {
  homeEmail,
  homePassword,
  homePendingLoginRegisterModal,
  homeStoreName,
  homeUserName,
  isHomeLogin,
  openHomeLoginRegisterModal,
  setOpenHomeLoginRegisterModal
} from "../../store/homeModalStore";
import LoginOption from "./LoginOption";
import RegisterOption from "./RegisterOption";
import "./LoginRegisterModal.css";
import {loginAsync} from "../../../../utils/authAsync";
import {useNavigate} from "@solidjs/router";
import {User} from "../../../../dto/User";

const LoginRegisterModal: Component = () => {
  const navigate = useNavigate();
  const setOpen = () => {
    setOpenHomeLoginRegisterModal(prev => !prev);
  }

  const handleOK = async () => {
    if (isHomeLogin()) {
      if (homeUserName() === "" || homePassword() === "") {
        const user: User = await loginAsync(homeUserName(), homePassword());
        localStorage.setItem("user", JSON.stringify(user));
        setOpenHomeLoginRegisterModal(prev => !prev);
        if (user.type === "USER" && user.storeId !== null) {
          navigate(`/store/${user.storeId}`, {replace: true});
        }
        if (user.type === "ADMIN") {
          navigate("/admin", {replace: true});
        }
      }
    } else {
      console.log(homeUserName());
      console.log(homePassword());
      console.log(homeEmail());
      console.log(homeStoreName());
    }
  }

  return (
    <ModalWrapper
      name={() => translate(isHomeLogin() ? "login" : "register")}
      open={openHomeLoginRegisterModal}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={homePendingLoginRegisterModal}
    >
      <Show when={isHomeLogin()} keyed>
        <LoginOption/>
      </Show>
      <Show when={!isHomeLogin()} keyed>
        <RegisterOption/>
      </Show>
    </ModalWrapper>
  )
}

export default LoginRegisterModal;
