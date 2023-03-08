import {Component} from "solid-js";
import {
  openEditModal,
  pendingEdit,
  setOpenEditModal,
  setSyntaxKey,
  setSyntaxValue,
  syntaxId,
  syntaxKey,
  syntaxLanguageId,
  syntaxValue
} from "../../stores/modalStore";
import ModalWrapper from "../../../../components/ModalWrapper";
import {VocabularyRequest} from "../../../../dto/VocabularyRequest";
import {translate, updateSyntax} from "../../../../utils/languageAsync";
import {checkEditSyntaxForm} from "../../utils/formChecks";

const EditSyntaxModal: Component = () => {
  const setOpen = () => {
    setOpenEditModal(prev => !prev);
  }

  const handleOK = async () => {
    const vocabulary: VocabularyRequest = {
      languageId: syntaxLanguageId(),
      key: syntaxKey(),
      meaning: syntaxValue()
    }
    if(!checkEditSyntaxForm(syntaxKey(), syntaxValue())){
      alert(translate("fillAllFields"));
    }else{
      await updateSyntax(vocabulary, syntaxId());
    }
  }

  return (
    <ModalWrapper
      name={() => translate("edit")}
      open={openEditModal}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={pendingEdit}
    >
      <p>{translate("key")}</p>
      <input
        class="input-custom"
        type="text"
        value={syntaxKey()}
        onChange={(e) => setSyntaxKey(e.currentTarget.value)}
        disabled={pendingEdit()}/>
      <p>{translate("syntax")}</p>
      <input
        class="input-custom"
        type="text"
        value={syntaxValue()}
        onChange={(e) => setSyntaxValue(e.currentTarget.value)}
        disabled={pendingEdit()}/>
    </ModalWrapper>
  )
}

export default EditSyntaxModal;
