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
  setHomePassword,
  setHomeUserName,
  setOpenHomeLoginRegisterModal
} from "../../store/homeModalStore";
import LoginOption from "./LoginOption";
import RegisterOption from "./RegisterOption";
import "./LoginRegisterModal.css";
import {loginAsync} from "../../../../utils/authAsync";
import {useNavigate} from "@solidjs/router";
import {User} from "../../../../dto/User";
import {ContactRequest} from "../../../../dto/ContactRequest";
import {EmailRequest} from "../../../../dto/EmailRequest";
import {PhoneRequest} from "../../../../dto/PhoneRequest";
import {
  registerAddContact,
  registerAddEmail,
  registerAddPhone,
  registerAddStore,
  registerAddUser
} from "../../utils/registerAsync";
import {StoreRequest} from "../../../../dto/StoreRequest";
import {registerAddedContactId, registerAddedStoreId} from "../../store/homeStore";
import {UserRequest} from "../../../../dto/UserRequest";
import {setLogIn} from "../../../../stores/authStore";
import {loginCheck, registerCheck} from "../../utils/formCheck";

const LoginRegisterModal: Component = () => {
  const navigate = useNavigate();
  const setOpen = () => {
    setOpenHomeLoginRegisterModal(prev => !prev);
  }

  const handleOK = async () => {
    if (isHomeLogin()) {
      if (loginCheck(homeUserName(), homePassword())) {
        const user: User = await loginAsync(homeUserName(), homePassword());
        localStorage.setItem("user", JSON.stringify(user));
        setOpenHomeLoginRegisterModal(prev => !prev);
        if (user.type === "USER" && user.storeId !== null) {
          setHomeUserName("");
          setHomePassword("");
          navigate(`/store/${user.storeId}`, {replace: true});
        }
        if (user.type === "ADMIN") {
          setHomeUserName("");
          setHomePassword("");
          navigate("/admin", {replace: true});
        }
      } else {
        alert(translate("fillAllFields"));
      }
    } else {
      if (registerCheck(homeUserName(), homeEmail(), homePassword(), homeStoreName())) {
        const store: StoreRequest = {
          name: homeStoreName(),
          description: translate("description"),
          bannerImage: null,
          storeImage: null,
          numOfRating: 0,
          sumOfRating: 0
        }

        await registerAddStore(store);
        const contactReq: ContactRequest = {
          storeId: registerAddedStoreId(),
          address: translate("unknown")
        }
        await registerAddContact(contactReq);

        const emailReq: EmailRequest = {
          contactId: registerAddedContactId(),
          email: homeEmail()
        }
        await registerAddEmail(emailReq);

        const phoneReq: PhoneRequest = {
          contactId: registerAddedContactId(),
          number: translate("unknown")
        }
        await registerAddPhone(phoneReq);

        const user: UserRequest = {
          name: homeUserName(),
          password: homePassword(),
          email: homeEmail(),
          type: "USER",
          storeId: registerAddedStoreId()
        }
        const userResponse = await registerAddUser(user)

        localStorage.setItem("user", JSON.stringify(userResponse));
        setLogIn(true);
        setOpenHomeLoginRegisterModal(prev => !prev);
        navigate(`/store/${userResponse.storeId}`, {replace: true});
      } else {
        alert(translate("fillAllFields"));
      }
    }
  }

  return (
    <ModalWrapper
      name={() => translate(isHomeLogin() ? "logIn" : "register")}
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
