import {Component, createEffect, onMount} from "solid-js";
import {addHeader, addId, openDelete, pendingDelete, setOpenAddModal, setOpenDelete} from "./stores/modalStore";
import {adds, searchAdd, setAdds, setRenderedAdds, setSearchAdd, setUsersStores} from "./stores/adminStore";
import OptionsAboveTable from "./components/OptionsAboveTable";
import ConfirmationModal from "./components/modals/ConfirmationModal";
import {translate} from "../../utils/languageAsync";
import {deleteAdd, getAdds} from "../../utils/addAsync";
import TableAdd from "./components/tables/TableAdd";
import {getUsersStore} from "./utils/usersAsync";
import NewAddModal from "./components/modals/NewAddModal";
import EditAddModal from "./components/modals/EditAddModal";

const Adds: Component = () => {
  console.log("Admin/Adds");

  onMount(async () => {
    setUsersStores(await getUsersStore());
    setAdds(await getAdds());
    setRenderedAdds(adds);
  });

  createEffect(() => {
    const addList: any[] = adds.filter((add: any) => {
      return add.header.toLocaleLowerCase().includes(searchAdd().toLocaleLowerCase()) ||
        add.storeName.toLocaleLowerCase().includes(searchAdd().toLocaleLowerCase());
    })
    setRenderedAdds(addList);
  });

  return(
    <>
      <OptionsAboveTable
        buttonTitle="addAdd"
        search={(str) => setSearchAdd(str)}
        openModal={() => setOpenAddModal(true)}
      />
      <TableAdd/>
      <NewAddModal/>
      <ConfirmationModal
        header={() => translate("deleteAdd?")}
        open={openDelete}
        setOpen={setOpenDelete}
        handleOK={() => deleteAdd(addId())}
        message={() => `${translate("deleteAddWithHeader?")}: ### ${addHeader()} ###`}
        pending={pendingDelete}
      />
      <EditAddModal/>
    </>
  )
}

export default Adds;
