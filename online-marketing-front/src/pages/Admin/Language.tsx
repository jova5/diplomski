import {Component, createEffect} from "solid-js";
import {
  openDeleteSyntaxModal,
  pendingDeleteSyntax,
  setOpenDeleteSyntaxModal, setOpenNewSyntaxModal,
  syntaxId,
  syntaxKey
} from "./stores/modalStore";
import NewSyntaxModal from "./components/NewSyntaxModal";
import {deleteSyntax, translate} from "./utils/languageAsync";
import ConfirmationModal from "./components/ConfirmationModal";
import {languages, searchLanguage, setRenderedLanguageList, setSearchLanguage} from "./stores/adminStore";
import EditSyntaxModal from "./components/EditSyntaxModal";
import TableLanguage from "./components/TableLanguage";
import OptionsAboveTable from "./components/OptionsAboveTable";

const Language: Component = () => {
  console.log("Admin/Language");

  createEffect(() => {
    const languageList: any[] = languages().filter((syntax: any) => {
      return syntax.key.toLocaleLowerCase().includes(searchLanguage().toLocaleLowerCase()) ||
        syntax.meaning.toLocaleLowerCase().includes(searchLanguage().toLocaleLowerCase())
    })
    setRenderedLanguageList(languageList);
  })

  return (
    <>
      <OptionsAboveTable
        buttonTitle="addSyntax"
        search={(str) => setSearchLanguage(str)}
        openModal={() => setOpenNewSyntaxModal(true)}
      />
      <TableLanguage/>
      <NewSyntaxModal/>
      <ConfirmationModal
        header={() => translate("deleteSyntax?")}
        open={openDeleteSyntaxModal}
        setOpen={setOpenDeleteSyntaxModal}
        handleOK={() => deleteSyntax(syntaxId())}
        message={() => `${translate("deleteSyntaxWithKey?")}: ### ${syntaxKey()} ###`}
        pending={pendingDeleteSyntax}
      />
      <EditSyntaxModal/>
    </>
  )
}

export default Language;
