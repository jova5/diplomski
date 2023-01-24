import {Store} from "../dto/Store";
import {
  addedContactId,
  setAddedContactId,
  setAddedStoreId,
  setOpenDelete,
  setPendingAdd,
  setPendingDelete,
  setPendingEdit,
  setUpdatedContactId,
  updatedContactId
} from "../pages/Admin/stores/modalStore";
import {renderedStores, setRenderedStores, setStores, stores} from "../pages/Admin/stores/adminStore";
import {produce} from "solid-js/store";
import {translate} from "./languageAsync";
import {StoreRequest} from "../dto/StoreRequest";
import {ContactRequest} from "../dto/ContactRequest";
import {EmailRequest} from "../dto/EmailRequest";
import {PhoneRequest} from "../dto/PhoneRequest";
import {setStoreStore} from "../pages/Store/store/storeStore";
import {setStorePendingEdit} from "../pages/Store/store/storeModalStore";

async function getStores(): Promise<Store[]> {
  return (await fetch('http://127.0.0.1:8080/store', {method: 'GET'})).json().then(d => {
    return d.map((i: any) => {
      return {
        id: i.id,
        name: i.name,
        description: i.description,
        numOfRating: i.numOfRating,
        sumOfRating: i.sumOfRating,
        bannerImage: i.bannerImage,
        storeImage: i.storeImage,
        address: i.contacts[0].address,
        contactId: i.contacts[0].id,
        email: i.contacts[0].emails[0].email,
        emailId: i.contacts[0].emails[0].id,
        phone: i.contacts[0].phones[0].number,
        phoneId: i.contacts[0].phones[0].id,
      }
    })
  })
}

async function getStoreById(id: number): Promise<Store> {
  return (await fetch(`http://127.0.0.1:8080/store/${id}`, {method: 'GET'})).json().then(d => {
    return {
      id: d.id,
      name: d.name,
      description: d.description,
      numOfRating: d.numOfRating,
      sumOfRating: d.sumOfRating,
      bannerImage: d.bannerImage,
      adds: d.adds,
      storeImage: d.storeImage,
      address: d.contacts[0].address,
      contactId: d.contacts[0].id,
      email: d.contacts[0].emails[0].email,
      emailId: d.contacts[0].emails[0].id,
      phone: d.contacts[0].phones[0].number,
      phoneId: d.contacts[0].phones[0].id,
    }
  })
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
      setRenderedStores(
        store => store.contactId === addedContactId(),
        produce((store: Store) => {
          store.email = data.email;
          store.emailId = data.id;
        }),
      );
      setStores(
        store => store.contactId === addedContactId(),
        produce((store: Store) => {
          store.email = data.email;
          store.emailId = data.id;
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
      setRenderedStores(
        store => store.contactId === addedContactId(),
        produce((store: Store) => {
          store.phone = data.number;
          store.phoneId = data.id;
        }),
      );
      setStores(
        store => store.contactId === addedContactId(),
        produce((store: Store) => {
          store.phone = data.number;
          store.phoneId = data.id;
        }),
      );
    })
}

async function updateStore(store: StoreRequest, storeId: number): Promise<any> {
  setPendingEdit(true);
  fetch(`http://127.0.0.1:8080/store/${storeId}`,
    {
      method: 'PUT',
      body: JSON.stringify(store),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
        // setAddedStoreId(data.id);
        setRenderedStores(
          store => store.id === data.id,
          produce((store: Store) => {
            store.name = data.name;
            store.description = data.description;
            store.bannerImage = data.bannerImage;
            store.storeImage = data.storeImage;
          }),
        );
        // setStores(
        //   produce((userList) => {
        //     userList.push({
        //       id: data.id,
        //       name: data.name,
        //       description: data.description,
        //       numOfRating: data.numOfRating,
        //       sumOfRating: data.sumOfRating,
        //       bannerImage: data.bannerImage,
        //       storeImage: data.storeImage,
        //     });
        //   })
        // );
        setPendingEdit(false);
      }
    )
    .catch(() => {
      setPendingEdit(false);
      alert(translate("errorUpdate"));
    })
}

async function updateStoreByOwner(store: StoreRequest, storeId: number): Promise<any> {
  setStorePendingEdit(true);
  fetch(`http://127.0.0.1:8080/store/${storeId}`,
    {
      method: 'PUT',
      body: JSON.stringify(store),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
        setStoreStore({
          id: data.id,
          name: data.name,
          description: data.description,
          numOfRating: data.numOfRating,
          sumOfRating: data.sumOfRating,
          bannerImage: data.bannerImage,
          adds: data.adds,
          storeImage: data.storeImage,
          address: data.contacts[0].address,
          contactId: data.contacts[0].id,
          email: data.contacts[0].emails[0].email,
          emailId: data.contacts[0].emails[0].id,
          phone: data.contacts[0].phones[0].number,
          phoneId: data.contacts[0].phones[0].id,
        });
        setStorePendingEdit(false);
      }
    )
    .catch(() => {
      setStorePendingEdit(false);
      alert(translate("errorUpdate"));
    })
}

async function updateContact(contact: ContactRequest, contactId: number): Promise<any> {
  await fetch(`http://127.0.0.1:8080/contact/${contactId}`,
    {
      method: 'PUT',
      body: JSON.stringify(contact),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setUpdatedContactId(data.id);
      setRenderedStores(
        store => store.id === data.storeId,
        produce((store: Store) => {
          store.address = data.address;
          store.contactId = data.id;
        }),
      );
      // setStores(
      //   store => store.id === data.storeId,
      //   produce((store: Store) => {
      //     store.address = data.address;
      //     store.contactId = data.id;
      //   }),
      // );
    })
}

async function updateContactByOwner(contact: ContactRequest, contactId: number): Promise<any> {
  setStorePendingEdit(true);
  await fetch(`http://127.0.0.1:8080/contact/${contactId}`,
    {
      method: 'PUT',
      body: JSON.stringify(contact),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setStoreStore((store) => {
        return {
          id: store!.id,
          name: store!.name,
          description: store!.description,
          numOfRating: store!.numOfRating,
          sumOfRating: store!.sumOfRating,
          bannerImage: store!.bannerImage,
          adds: store!.adds,
          storeImage: store!.storeImage,
          address: data.address,
          contactId: store!.contactId,
          email: store!.email,
          emailId: store!.emailId,
          phone: store!.phone,
          phoneId: store!.phoneId,
        }
      });
      setStorePendingEdit(false);
    })
    .catch(err => {
      setStorePendingEdit(false);
      alert(translate("errorUpdate"));
    })
}

async function updateEmail(email: EmailRequest, emailId: number): Promise<any> {
  await fetch(`http://127.0.0.1:8080/email/${emailId}`,
    {
      method: 'PUT',
      body: JSON.stringify(email),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setRenderedStores(
        store => store.contactId === updatedContactId(),
        produce((store: Store) => {
          store.email = data.email;
          store.emailId = data.id;
        }),
      );
      // setStores(
      //   store => store.contactId === data.contactId,
      //   produce((store: Store) => {
      //     store.email = data.email;
      //     store.emailId = data.id;
      //   }),
      // );
    })
}

async function updateEmailByOwner(email: EmailRequest, emailId: number): Promise<any> {
  setStorePendingEdit(true);
  await fetch(`http://127.0.0.1:8080/email/${emailId}`,
    {
      method: 'PUT',
      body: JSON.stringify(email),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setStoreStore((store) => {
        return {
          id: store!.id,
          name: store!.name,
          description: store!.description,
          numOfRating: store!.numOfRating,
          sumOfRating: store!.sumOfRating,
          bannerImage: store!.bannerImage,
          adds: store!.adds,
          storeImage: store!.storeImage,
          address: store!.address,
          contactId: store!.contactId,
          email: data.email,
          emailId: store!.emailId,
          phone: store!.phone,
          phoneId: store!.phoneId,
        }
      });
      setStorePendingEdit(false);
    })
    .catch(err => {
      setStorePendingEdit(false);
      alert(translate("errorUpdate"));
    })
}

async function updatePhone(phone: PhoneRequest, phoneId: number): Promise<any> {
  await fetch(`http://127.0.0.1:8080/phone/${phoneId}`,
    {
      method: 'PUT',
      body: JSON.stringify(phone),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setRenderedStores(
        store => store.contactId === updatedContactId(),
        produce((store: Store) => {
          store.phone = data.number;
          store.phoneId = data.id;
        }),
      );
      // setStores(
      //   store => store.contactId === data.contactId,
      //   produce((store: Store) => {
      //     store.phone = data.phone;
      //     store.phoneId = data.id;
      //   }),
      // );
    })
}

async function updatePhoneByOwner(phone: PhoneRequest, phoneId: number): Promise<any> {
  setStorePendingEdit(true);
  await fetch(`http://127.0.0.1:8080/phone/${phoneId}`,
    {
      method: 'PUT',
      body: JSON.stringify(phone),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setStoreStore((store) => {
        return {
          id: store!.id,
          name: store!.name,
          description: store!.description,
          numOfRating: store!.numOfRating,
          sumOfRating: store!.sumOfRating,
          bannerImage: store!.bannerImage,
          adds: store!.adds,
          storeImage: store!.storeImage,
          address: store!.address,
          contactId: store!.contactId,
          email: store!.email,
          emailId: store!.emailId,
          phone: data.number,
          phoneId: store!.phoneId,
        }
      });
      setStorePendingEdit(false);
    })
    .catch(err => {
      setStorePendingEdit(false);
      alert(translate("errorUpdate"));
    })
}

async function deleteStore(id: number): Promise<any> {
  setPendingDelete(true);
  await fetch(`http://127.0.0.1:8080/store/deleteCustom/${id}`, {method: 'DELETE',})
    .then(res => res.json())
    .then(() => {
      setRenderedStores(renderedStores.filter((item) => item.id !== id));
      setStores(stores.filter((item) => item.id !== id));
      setPendingDelete(false);
      setOpenDelete(false);
    })
    .catch(() => {
      setPendingDelete(false);
      alert(translate("errorDelete"));
    })
}

export {
  getStores,
  getStoreById,
  addStore,
  addContact,
  addEmail,
  addPhone,
  updateStore,
  updateContact,
  updateEmail,
  updatePhone,
  deleteStore,
  updateStoreByOwner,
  updateContactByOwner,
  updateEmailByOwner,
  updatePhoneByOwner
};
