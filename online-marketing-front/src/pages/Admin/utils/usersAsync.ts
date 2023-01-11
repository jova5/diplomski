import {User} from "../../../dto/User";
import {UserRequest} from "../../../dto/UserRequest";
import {setRenderedUsers, setUsers} from "../stores/adminStore";
import {produce} from "solid-js/store";
import {setPendingAdd} from "../stores/modalStore";
import {translate} from "./languageAsync";

async function getUsers(): Promise<User[]> {
  return (await fetch('http://127.0.0.1:8080/user', {method: 'GET'})).json();
}

async function addUser(user: UserRequest): Promise<any> {
  setPendingAdd(true);
  await fetch('http://127.0.0.1:8080/user',
    {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setRenderedUsers(
        produce((userList) => {
          userList.push({
            id: data.id,
            name: data.name,
            password: data.password,
            email: data.email,
            storeId: data.storeId,
            type: data.type
          });
        })
      );
      setUsers(
        produce((userList) => {
          userList.push({
            id: data.id,
            name: data.name,
            password: data.password,
            email: data.email,
            storeId: data.storeId,
            type: data.type
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

export {getUsers, addUser};
