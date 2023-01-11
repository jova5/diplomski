import {Component} from "solid-js";
import OptionsAboveTable from "./components/OptionsAboveTable";
import {setSearchUser} from "./stores/adminStore";
import {setOpenNewUserModal} from "./stores/modalStore";

const Users: Component = () => {
  return (
    <>
      <OptionsAboveTable
        buttonTitle="addUser"
        search={(str) => setSearchUser(str)}
        openModal={() => setOpenNewUserModal(true)}
      />
      <div>This is Users</div>
    </>

  )
}

export default Users;
