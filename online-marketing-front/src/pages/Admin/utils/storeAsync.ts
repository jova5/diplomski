import {Store} from "../../../dto/Store";
import {UserRequest} from "../../../dto/UserRequest";
import {setAddedContactId, setAddedStoreId, setPendingAdd} from "../stores/modalStore";
import {setRenderedStores, setRenderedUsers, setStores, setUsers} from "../stores/adminStore";
import {produce} from "solid-js/store";
import {translate} from "./languageAsync";
import {StoreRequest} from "../../../dto/StoreRequest";
import {ContactRequest} from "../../../dto/ContactRequest";
import {EmailRequest} from "../../../dto/EmailRequest";
import {PhoneRequest} from "../../../dto/PhoneRequest";

async function getStore(): Promise<Store[]> {
  return (await fetch('http://127.0.0.1:8080/store', {method: 'GET'})).json();
}

async function addStore(store: StoreRequest): Promise<any> {
  setPendingAdd(true);
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
      console.log(data);
      setAddedStoreId(data.id);
      setRenderedStores(
        produce((storeList) => {
          storeList.push({
            id: data.id,
            name: data.name,
            description: data.description,
            numOfRating: data.numOfRating,
            sumOfRating: data.sumOfRating,
            bannerImage: data.bannerImage,
            storeImage: data.storeImage,
          });
        })
      );
      setStores(
        produce((userList) => {
          userList.push({
            id: data.id,
            name: data.name,
            description: data.description,
            numOfRating: data.numOfRating,
            sumOfRating: data.sumOfRating,
            bannerImage: data.bannerImage,
            storeImage: data.storeImage,
          });
        })
      );
      setPendingAdd(false);
    })
    .catch(() => {
      setPendingAdd(false);
      alert(translate("errorAdd"));
    })
}

async function addContact(contact: ContactRequest): Promise<any> {
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
      console.log(data);
      setAddedContactId(data.id);
      setRenderedStores(
        store => store.id === data.storeId,
        produce((store: Store) => {
          store.address = data.address;
          store.contactId = data.id;
        }),
      );
      setStores(
        store => store.id === data.storeId,
        produce((store: Store) => {
          store.address = data.address;
          store.contactId = data.id;
        }),
      );
    })
}
async function addEmail(email: EmailRequest): Promise<any> {
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
      console.log(data)
      setRenderedStores(
        store => store.contactId === data.contactId,
        produce((store: Store) => {
          store.email = data.email;
        }),
      );
      setStores(
        store => store.contactId === data.contactId,
        produce((store: Store) => {
          store.email = data.email;
        }),
      );
    })
}
async function addPhone(phone: PhoneRequest): Promise<any> {
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
      console.log(data)
      setRenderedStores(
        store => store.contactId === data.contactId,
        produce((store: Store) => {
          store.phone = data.phone;
        }),
      );
      setStores(
        store => store.contactId === data.contactId,
        produce((store: Store) => {
          store.phone = data.phone;
        }),
      );
    })
}

export {getStore, addStore, addContact, addEmail, addPhone};
