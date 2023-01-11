import {Component, onMount} from "solid-js";
import OptionsAboveTable from "./components/OptionsAboveTable";
import {setSearchUser, setUsers} from "./stores/adminStore";
import {openDelete, pendingDelete, setOpenDelete, setOpenNewUserModal} from "./stores/modalStore";
import {getUsers} from "./utils/usersAsync";
import TableUser from "./components/TableUser";
import {translate} from "./utils/languageAsync";
import ConfirmationModal from "./components/modals/ConfirmationModal";
import NewUserModal from "./components/modals/NewUserModal";

const Users: Component = () => {
  console.log("Admin/Users");

  onMount(async () => {
    setUsers(await getUsers());
  })

  return (
    <>
      <OptionsAboveTable
        buttonTitle="addUser"
        search={(str) => setSearchUser(str)}
        openModal={() => setOpenNewUserModal(true)}
      />
      <TableUser/>
      <NewUserModal/>
      <ConfirmationModal
        header={() => translate("deleteUser?")}
        open={openDelete}
        setOpen={setOpenDelete}
        handleOK={() => {
        }}
        message={() => `${translate("deleteUserWithUserName?")}: ### test ###`}
        pending={pendingDelete}
      />
    </>
  )
}

export default Users;
