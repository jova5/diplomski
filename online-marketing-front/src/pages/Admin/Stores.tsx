import {Component, createEffect, onMount} from "solid-js";
import OptionsAboveTable from "./components/OptionsAboveTable";
import {setRenderedStores, setSearchStore, setStores, stores} from "./stores/adminStore";
import {openDelete, pendingDelete, setOpenAddModal, setOpenDelete, setStoreId} from "./stores/modalStore";
import ConfirmationModal from "./components/modals/ConfirmationModal";
import {translate} from "./utils/languageAsync";
import NewStoreModal from "./components/modals/NewStoreModal";
import TableStore from "./components/tables/TableStore";
import {getStore} from "./utils/storeAsync";

const Stores: Component = () => {
  console.log("Admin/Stores");

  onMount(async () => {
    setStoreId("");
    setStores(await getStore());
    setRenderedStores(stores);
  });

  createEffect(() => {
    // const userList: any[] = users.filter((user: any) => {
    //   return user.name.toLocaleLowerCase().includes(searchUser().toLocaleLowerCase()) ||
    //     user.email.toLocaleLowerCase().includes(searchUser().toLocaleLowerCase()) ||
    //     user.type.toLocaleLowerCase().includes(searchUser().toLocaleLowerCase())
    // })
    // setRenderedUsers(userList);
  });

  return (
    <>
      <OptionsAboveTable
        buttonTitle="addStore"
        search={(str) => setSearchStore(str)}
        openModal={() => setOpenAddModal(true)}
      />
      {/*<TableUser/>*/}
      <TableStore/>
      <NewStoreModal/>
      <ConfirmationModal
        header={() => translate("deleteStore?")}
        open={openDelete}
        setOpen={setOpenDelete}
        handleOK={() => {
        }}
        message={() => `${translate("deleteStoreWithName?")}: ### test ###`}
        pending={pendingDelete}
      />
      {/*<EditUserModal/>*/}
    </>
  )
}

export default Stores;
