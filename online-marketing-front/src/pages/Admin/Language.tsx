import {Component, createEffect, For} from "solid-js";
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@suid/material";
import PostAddIcon from '@suid/icons-material/PostAdd';
import SearchBar from "./components/SearchBar";
import DeleteIcon from '@suid/icons-material/Delete';
import EditIcon from '@suid/icons-material/Edit';
import {
  openDeleteSyntaxModal,
  setOpenDeleteSyntaxModal,
  setOpenEditSyntaxModal,
  setOpenNewSyntaxModal,
  setSyntaxId,
  setSyntaxKey,
  setSyntaxLanguageId,
  setSyntaxValue,
  syntaxId,
  syntaxKey
} from "./stores/modalStore";
import NewSyntaxModal from "./components/NewSyntaxModal";
import {deleteSyntax, translate} from "./utils/languageAsync";
import ConfirmationModal from "./components/ConfirmationModal";
import {
  languages,
  renderedLanguageList,
  searchLanguage,
  setRenderedLanguageList,
  setSearchLanguage
} from "./stores/adminStore";
import EditSyntaxModal from "./components/EditSyntaxModal";
import "./Language.css";

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
      <div class="options">
        <div class="options-left">
          <SearchBar
            placeholder={`${translate("search")}...`}
            onChange={(str) => setSearchLanguage(str)}
          />
        </div>
        <div class="options-right">
          <Button
            class="new-language"
            variant="outlined"
            onClick={() => setOpenNewSyntaxModal(true)}>
            <PostAddIcon/>
            {translate("addSyntax")}
          </Button>
        </div>
      </div>
      <TableContainer class="table-container" component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{translate("key")}</TableCell>
              <TableCell align="left">{translate("language")}</TableCell>
              <TableCell align="left">{translate("syntax")}</TableCell>
              <TableCell align="right">{translate("options")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <For each={renderedLanguageList}>
              {
                (value) => {
                  return (
                    <TableRow class="table-row" hover={true}
                              sx={{"&:last-child td, &:last-child th": {border: 0}}}
                    >
                      <TableCell align="left">
                        {value.key}
                      </TableCell>
                      <TableCell align="left">{value.shortName}</TableCell>
                      <TableCell align="left">{value.meaning}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          class="edit-table-row"
                          onClick={() => {
                            setSyntaxId(value.id);
                            setSyntaxLanguageId(value.languageId);
                            setSyntaxKey(value.key);
                            setSyntaxValue(value.meaning);
                            setOpenEditSyntaxModal(true);
                          }}>
                          <EditIcon class="edit-table-row-icon"/>
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            setSyntaxId(value.id);
                            setSyntaxKey(value.key);
                            setOpenDeleteSyntaxModal(true);
                          }}>
                          <DeleteIcon class="delete-table-row-icon"/>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                }
              }
            </For>
          </TableBody>
        </Table>
      </TableContainer>
      <NewSyntaxModal/>
      <ConfirmationModal
        header={() => translate("deleteSyntax?")}
        open={openDeleteSyntaxModal}
        setOpen={setOpenDeleteSyntaxModal}
        handleOK={() => deleteSyntax(syntaxId())}
        message={() => `${translate("deleteSyntaxWithKey?")}: ### ${syntaxKey()} ###`}
      />
      <EditSyntaxModal/>
    </>
  )
}

export default Language;
