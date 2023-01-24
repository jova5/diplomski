import {Adds} from "../dto/Adds";
import {setOpenDelete, setPendingAdd, setPendingDelete, setPendingEdit} from "../pages/Admin/stores/modalStore";
import {adds, renderedAdds, setAdds, setRenderedAdds, usersStores} from "../pages/Admin/stores/adminStore";
import {produce} from "solid-js/store";
import {translate} from "./languageAsync";
import {AddRequest} from "../dto/AddRequest";
import {
  setStoreDeleteAddModal,
  setStoreDeleteAddPending,
  setStorePendingEdit
} from "../pages/Store/store/storeModalStore";
import {setStoreStore, storeStore} from "../pages/Store/store/storeStore";

async function getAdds(): Promise<Adds[]> {
  return (await fetch('http://127.0.0.1:8080/add', {method: 'GET'})).json().then(
    d => {
      return d.map((i: any) => {
        return {
          id: i.id,
          storeId: i.storeId,
          description: i.description,
          header: i.header,
          image: i.image,
          premium: i.premium,
          storeName: usersStores().find((item) => item.id === i.storeId).name,
        }
      })
    }
  );
}

async function addAdd(add: AddRequest): Promise<any> {
  setPendingAdd(true);
  await fetch('http://127.0.0.1:8080/add',
    {
      method: 'POST',
      body: JSON.stringify(add),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setRenderedAdds(
        produce((addList) => {
          addList.push({
            id: data.id,
            storeId: data.storeId,
            description: data.description,
            header: data.header,
            image: data.image,
            premium: data.premium,
            storeName: usersStores().find((item) => item.id === data.storeId).name,
          });
        })
      );
      setAdds(
        produce((addList) => {
          addList.push({
            id: data.id,
            storeId: data.storeId,
            description: data.description,
            header: data.header,
            image: data.image,
            premium: data.premium,
            storeName: usersStores().find((item) => item.id === data.storeId).name,
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

async function updateAdd(add: AddRequest, addId: number): Promise<any> {
  setPendingEdit(true);
  fetch(`http://127.0.0.1:8080/add/${addId}`,
    {
      method: 'PUT',
      body: JSON.stringify(add),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
        setRenderedAdds(
          add => add.id === data.id,
          produce((add: Adds) => {
            add.storeId = data.storeId;
            add.description = data.description;
            add.header = data.header;
            add.image = data.image;
            add.premium = data.premium;
            add.storeName = usersStores().find((item) => item.id === data.storeId).name;
          }),
        );
        setPendingEdit(false);
      }
    )
    .catch(() => {
      setPendingEdit(false);
      alert(translate("errorUpdate"));
    })
}

async function updateAddByOwner(add: AddRequest, addId: number): Promise<any> {
  setStorePendingEdit(true);
  fetch(`http://127.0.0.1:8080/add/${addId}`,
    {
      method: 'PUT',
      body: JSON.stringify(add),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
        let storeAdds: Adds[] = storeStore()?.adds!;
        const addIndex = storeAdds.findIndex((item) => item.id === addId);
        storeAdds[addIndex] = {
          id: data.id,
          storeId: data.storeId,
          storeName: storeStore()?.name,
          image: data.image,
          header: data.header,
          description: data.description,
          premium: data.premium
        }
        setStoreStore((store) => {
          return {
            id: store!.id,
            name: store!.name,
            description: store!.description,
            numOfRating: store!.numOfRating,
            sumOfRating: store!.sumOfRating,
            bannerImage: store!.bannerImage,
            adds: storeAdds,
            storeImage: store!.storeImage,
            address: store!.address,
            contactId: store!.contactId,
            email: store!.email,
            emailId: store!.emailId,
            phone: store!.phone,
            phoneId: store!.phoneId,
          }
        });
        setStorePendingEdit(false);
      }
    )
    .catch(() => {
      setStorePendingEdit(false);
      alert(translate("errorUpdate"));
    })
}

async function deleteAdd(id: number): Promise<any> {
  setPendingDelete(true);
  await fetch(`http://127.0.0.1:8080/add/${id}`, {method: 'DELETE',})
    .then(res => res.json())
    .then(() => {
      setRenderedAdds(renderedAdds.filter((item) => item.id !== id));
      setAdds(adds.filter((item) => item.id !== id));
      setPendingDelete(false);
      setOpenDelete(false);
    })
    .catch(() => {
      setPendingDelete(false);
      alert(translate("errorDelete"));
    })
}

async function deleteAddByOwner(id: number): Promise<any> {
  setStoreDeleteAddPending(true);
  await fetch(`http://127.0.0.1:8080/add/${id}`, {method: 'DELETE',})
    .then(res => res.json())
    .then(() => {
      let storeAdds: Adds[] = storeStore()?.adds!;
      storeAdds = storeAdds.filter(item => item.id !== id);
      setStoreStore((store) => {
        return {
          id: store!.id,
          name: store!.name,
          description: store!.description,
          numOfRating: store!.numOfRating,
          sumOfRating: store!.sumOfRating,
          bannerImage: store!.bannerImage,
          adds: storeAdds,
          storeImage: store!.storeImage,
          address: store!.address,
          contactId: store!.contactId,
          email: store!.email,
          emailId: store!.emailId,
          phone: store!.phone,
          phoneId: store!.phoneId,
        }
      });
      setStoreDeleteAddPending(false);
      setStoreDeleteAddModal(false);
    })
    .catch(() => {
      setStoreDeleteAddPending(false);
      alert(translate("errorDelete"));
    })
}

export {getAdds, addAdd, updateAdd, deleteAdd, updateAddByOwner, deleteAddByOwner};
