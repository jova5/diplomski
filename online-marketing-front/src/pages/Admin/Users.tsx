import {Component, onMount} from "solid-js";
import OptionsAboveTable from "./components/OptionsAboveTable";
import {setSearchUser, setUsers} from "./stores/adminStore";
import {setOpenNewUserModal} from "./stores/modalStore";
import {getUsers} from "./utils/usersAsync";
import TableUser from "./components/TableUser";

const Users: Component = () => {
  console.log("Admin/Users");

  onMount(async () => {
    setUsers(await getUsers())
  })

  return (
    <>
      <OptionsAboveTable
        buttonTitle="addUser"
        search={(str) => setSearchUser(str)}
        openModal={() => setOpenNewUserModal(true)}
      />
      <TableUser/>
    </>
  )
}

export default Users;
