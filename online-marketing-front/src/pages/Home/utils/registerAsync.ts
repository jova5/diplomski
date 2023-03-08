import {StoreRequest} from "../../../dto/StoreRequest";
import {translate} from "../../../utils/languageAsync";
import {ContactRequest} from "../../../dto/ContactRequest";
import {EmailRequest} from "../../../dto/EmailRequest";
import {PhoneRequest} from "../../../dto/PhoneRequest";
import {setRegisterAddedContactId, setRegisterAddedStoreId, setRegisterPending} from "../store/homeStore";
import {UserRequest} from "../../../dto/UserRequest";
import {User} from "../../../dto/User";

async function registerAddStore(store: StoreRequest): Promise<any> {
  setRegisterPending(true);
  await fetch('http://127.0.0.1:8080/store',
    {
      method: 'POST',
      body: JSON.stringify(store),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setRegisterAddedStoreId(data.id);
    })
    .catch(() => {
      setRegisterPending(false);
      alert(translate("errorAdd"));
    })
}

async function registerAddContact(contact: ContactRequest): Promise<any> {
  await fetch('http://127.0.0.1:8080/contact',
    {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setRegisterAddedContactId(data.id);
    })
}

async function registerAddEmail(email: EmailRequest): Promise<any> {
  await fetch('http://127.0.0.1:8080/email',
    {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {

    })
}

async function registerAddPhone(phone: PhoneRequest): Promise<any> {
  await fetch('http://127.0.0.1:8080/phone',
    {
      method: 'POST',
      body: JSON.stringify(phone),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {

    })
}

async function registerAddUser(user: UserRequest): Promise<User> {
  return await fetch('http://127.0.0.1:8080/user',
    {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        alert(translate("errorAdd"));
      }
    })
    .then(data => {
      setRegisterPending(false);
      return data;
    })
    .catch(() => {
      setRegisterPending(false);
      alert(translate("errorAdd"));
    })
}

export {registerAddStore, registerAddContact, registerAddEmail, registerAddPhone, registerAddUser};
