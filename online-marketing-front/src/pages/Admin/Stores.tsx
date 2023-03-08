import {Component, createEffect, onMount} from "solid-js";
import OptionsAboveTable from "./components/OptionsAboveTable";
import {searchStore, setRenderedStores, setSearchStore, setStores, stores} from "./stores/adminStore";
import {openDelete, pendingDelete, setOpenAddModal, setOpenDelete, setStoreId, storeDelete} from "./stores/modalStore";
import ConfirmationModal from "../../components/ConfirmationModal";
import {translate} from "../../utils/languageAsync";
import NewStoreModal from "./components/modals/NewStoreModal";
import TableStore from "./components/tables/TableStore";
import {deleteStore, getStores} from "../../utils/storeAsync";
import EditStoreModal from "./components/modals/EditStoreModal";

const Stores: Component = () => {
  console.log("Admin/Stores");

  onMount(async () => {
    setStoreId("");
    setStores(await getStores());
    setRenderedStores(stores);
  });

  createEffect(() => {
    const storeList: any[] = stores.filter((store: any) => {
      return store.name.toLocaleLowerCase().includes(searchStore().toLocaleLowerCase())
    })
    setRenderedStores(storeList);
  });

  return (
    <>
      <OptionsAboveTable
        buttonTitle="addStore"
        search={(str) => setSearchStore(str)}
        openModal={() => setOpenAddModal(true)}
      />
      <TableStore/>
      <NewStoreModal/>
      <ConfirmationModal
        header={() => translate("deleteStore?")}
        open={openDelete}
        setOpen={setOpenDelete}
        handleOK={() => deleteStore(storeDelete().id)}
        message={() => `${translate("deleteStoreWithName?")}: ### ${storeDelete().name} ###`}
        pending={pendingDelete}
      />
      <EditStoreModal/>
    </>
  )
}

export default Stores;
