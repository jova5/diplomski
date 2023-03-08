import {Component, createEffect, onMount} from "solid-js";
import OptionsAboveTable from "./components/OptionsAboveTable";
import {
  categories,
  searchCategory,
  setCategories,
  setRenderedCategories,
  setRenderedStores,
  setSearchCategory
} from "./stores/adminStore";
import {categoryId, openDelete, pendingDelete, setOpenAddModal, setOpenDelete} from "./stores/modalStore";
import ConfirmationModal from "../../components/ConfirmationModal";
import {translate} from "../../utils/languageAsync";
import NewCategoryModal from "./components/modals/NewCategoryModal";
import {deleteCategory, getCategories} from "./utils/categoryAsync";
import TableCategory from "./components/tables/TableCategory";
import EditCategoryModal from "./components/modals/EditCategoryModal";

const Categories: Component = () => {
  console.log("Admin/Categories");

  onMount(async () => {
    setCategories(await getCategories());
    setRenderedCategories(categories);
  });

  createEffect(() => {
    const categoryList: any[] = categories.filter((category: any) => {
      return category.name.toLocaleLowerCase().includes(searchCategory().toLocaleLowerCase())
    })
    setRenderedStores(categoryList);
  });

  return (
    <>
      <OptionsAboveTable
        buttonTitle="addCategory"
        search={(str) => setSearchCategory(str)}
        openModal={() => setOpenAddModal(true)}
      />
      <TableCategory/>
      <NewCategoryModal/>
      <ConfirmationModal
        header={() => translate("deleteCategory?")}
        open={openDelete}
        setOpen={setOpenDelete}
        handleOK={() => deleteCategory(categoryId())}
        message={() => `${translate("deleteCategoryWithName?")}: ### test ###`}
        pending={pendingDelete}
      />
      <EditCategoryModal/>
    </>
  )
}

export default Categories;
