import {Component, createEffect, onMount} from "solid-js";
import OptionsAboveTable from "./components/OptionsAboveTable";
import {searchUser, setRenderedUsers, setSearchUser, setUsers, setUsersStores, users} from "./stores/adminStore";
import {openDelete, pendingDelete, setOpenAddModal, setOpenDelete, userId, userNameValue} from "./stores/modalStore";
import {deleteUser, getUsers, getUsersStore} from "./utils/usersAsync";
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
    setUsersStores(await getUsersStore());
  });

  createEffect(() => {
    const userList: any[] = users.filter((user: any) => {
      return user.name.toLocaleLowerCase().includes(searchUser().toLocaleLowerCase()) ||
        user.email.toLocaleLowerCase().includes(searchUser().toLocaleLowerCase()) ||
        user.type.toLocaleLowerCase().includes(searchUser().toLocaleLowerCase())
    })
    setRenderedUsers(userList);
  });

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
        handleOK={() => deleteUser(userId())}
        message={() => `${translate("deleteUserWithUserName?")}: ### ${userNameValue()} ###`}
        pending={pendingDelete}
      />
      <EditUserModal/>
    </>
  )
}

export default Users;
