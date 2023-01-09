import {Component} from "solid-js";
import {
  openEditSyntaxModal,
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
    await updateSyntax(vocabulary, syntaxId());
  }

  return (
    <ModalWrapper
      name={() => translate("edit")}
      open={openEditSyntaxModal}
      setOpen={setOpen}
      handleOK={handleOK}
    >
      <p>{translate("key")}</p>
      <input
        class="input-custom"
        type="text"
        value={syntaxKey()}
        onChange={(e) => setSyntaxKey(e.currentTarget.value)}/>
      <p>{translate("syntax")}</p>
      <input
        class="input-custom"
        type="text"
        value={syntaxValue()}
        onChange={(e) => setSyntaxValue(e.currentTarget.value)}/>
    </ModalWrapper>
  )
}

export default EditSyntaxModal;
