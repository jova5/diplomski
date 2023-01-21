import {Component, createSignal} from "solid-js";
import {translate} from "../../../../utils/languageAsync";
import {openAddModal, pendingAdd, setOpenAddModal} from "../../stores/modalStore";
import ModalWrapper from "../../../../components/ModalWrapper";
import {CategoryRequest} from "../../../../dto/CategoryRequest";
import {addCategory} from "../../utils/categoryAsync";

const NewCategoryModal: Component = () => {
  const [localCategoryName, setLocalCategoryName] = createSignal<string>("");
  const setOpen = () => {
    setOpenAddModal(prev => !prev);
  }

  const handleOK = async () => {
    const category: CategoryRequest = {
      name: localCategoryName(),
    }
    if (category.name === "") {
      alert(translate("fillAllFields"));
    } else {
      await addCategory(category);
    }
  }

  return (
    <ModalWrapper
      name={() => translate("addSyntax")}
      open={openAddModal}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={pendingAdd}
    >
      <p>{translate("category")}</p>
      <input
        class="input-custom"
        type="text"
        placeholder={translate("category")}
        onChange={(e) => setLocalCategoryName(e.currentTarget.value)}
        disabled={pendingAdd()}/>
    </ModalWrapper>
  )
}

export default NewCategoryModal;
