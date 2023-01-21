import {User} from "../../../dto/User";
import {UserRequest} from "../../../dto/UserRequest";
import {renderedUsers, setRenderedUsers, setUsers, users} from "../stores/adminStore";
import {produce} from "solid-js/store";
import {setOpenDelete, setPendingAdd, setPendingDelete, setPendingEdit} from "../stores/modalStore";
import {translate} from "../../../utils/languageAsync";

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

async function getUsersStore(): Promise<any[]> {
  return (await fetch('http://127.0.0.1:8080/store/forUsers', {method: 'GET'})).json();
}

async function updateUser(user: UserRequest, userId: number): Promise<any> {
  setPendingEdit(true);
  fetch(`http://127.0.0.1:8080/user/${userId}`,
    {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
        setRenderedUsers(
          user => user.id === data.id,
          produce((user: any) => {
            user.name = data.name;
            user.password = data.password;
            user.email = data.email;
            user.storeId = data.storeId;
            user.type = data.type;
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

async function deleteUser(id: number): Promise<any> {
  setPendingDelete(true);
  await fetch(`http://127.0.0.1:8080/user/${id}`, {method: 'DELETE',})
    .then(res => res.json())
    .then(() => {
      setRenderedUsers(renderedUsers.filter((item) => item.id !== id));
      setUsers(users.filter((item) => item.id !== id));
      setPendingDelete(false);
      setOpenDelete(false);
    })
    .catch(() => {
      setPendingDelete(false);
      alert(translate("errorDelete"));
    })
}

export {getUsers, addUser, getUsersStore, updateUser, deleteUser};
