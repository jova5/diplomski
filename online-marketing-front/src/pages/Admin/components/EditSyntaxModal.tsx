import {Component} from "solid-js";
import {
  openEditSyntaxModal, pendingEditSyntax,
  setOpenEditSyntaxModal,
  setSyntaxKey,
  setSyntaxValue,
  syntaxId,
  syntaxKey,
  syntaxLanguageId,
  syntaxValue
} from "../stores/modalStore";
import ModalWrapper from "../../../components/ModalWrapper";
import {VocabularyRequest} from "../../../dto/VocabularyRequest";
import {translate, updateSyntax} from "../utils/languageAsync";
import {checkEditSyntaxForm} from "../utils/formChecks";

const EditSyntaxModal: Component = () => {
  const setOpen = () => {
    setOpenEditSyntaxModal(prev => !prev);
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
      open={openEditSyntaxModal}
      setOpen={setOpen}
      handleOK={handleOK}
      pending={pendingEditSyntax}
    >
      <p>{translate("key")}</p>
      <input
        class="input-custom"
        type="text"
        value={syntaxKey()}
        onChange={(e) => setSyntaxKey(e.currentTarget.value)}
        disabled={pendingEditSyntax()}/>
      <p>{translate("syntax")}</p>
      <input
        class="input-custom"
        type="text"
        value={syntaxValue()}
        onChange={(e) => setSyntaxValue(e.currentTarget.value)}
        disabled={pendingEditSyntax()}/>
    </ModalWrapper>
  )
}

export default EditSyntaxModal;
