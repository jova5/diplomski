import {Component} from "solid-js";
import {translate} from "../../utils/languageAsync";
import {
  categoryId,
  categoryName,
  openEditModal,
  pendingEdit,
  setCategoryName,
  setOpenEditModal
} from "../../stores/modalStore";
import ModalWrapper from "../../../../components/ModalWrapper";
import {CategoryRequest} from "../../../../dto/CategoryRequest";
import {updateCategory} from "../../utils/categoryAsync";

const EditCategoryModal: Component = () => {
  const setOpen = () => {
    setOpenEditModal(prev => !prev);
  }

  const handleOK = async () => {
    const category: CategoryRequest = {
      name: categoryName(),
    }
    if (category.name === "") {
      alert(translate("fillAllFields"));
    } else {
      await updateCategory(category, categoryId());
    }
  }

  return (
    <ModalWrapper
      name={() => translate("editCategory")}
      open={openEditModal}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={pendingEdit}
    >
      <p>{translate("category")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("category")}
        value={categoryName()}
        onChange={(e) => setCategoryName(e.currentTarget.value)}
        disabled={pendingEdit()}/>
    </ModalWrapper>
  )
}

export default EditCategoryModal;
