import {Component, onMount} from "solid-js";
import OptionsAboveTable from "./components/OptionsAboveTable";
import {setRenderedUsers, setSearchUser, setUsers, users} from "./stores/adminStore";
import {openDelete, pendingDelete, setOpenAddModal, setOpenDelete} from "./stores/modalStore";
import {getUsers} from "./utils/usersAsync";
import TableUser from "./components/TableUser";
import {translate} from "./utils/languageAsync";
import ConfirmationModal from "./components/modals/ConfirmationModal";
import NewUserModal from "./components/modals/NewUserModal";
import EditUserModal from "./components/modals/EditUserModal";

const Users: Component = () => {
  console.log("Admin/Users");

  onMount(async () => {
    setUsers(await getUsers());
    setRenderedUsers(users);
  })

  return (
    <>
      <OptionsAboveTable
        buttonTitle="addUser"
        search={(str) => setSearchUser(str)}
        openModal={() => setOpenAddModal(true)}
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
      <EditUserModal/>
    </>
  )
}

export default Users;
