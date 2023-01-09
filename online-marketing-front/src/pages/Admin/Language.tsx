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
import AddCircleOutlineIcon from '@suid/icons-material/AddCircleOutline';
import PostAddIcon from '@suid/icons-material/PostAdd';
import SearchBar from "./components/SearchBar";
import DeleteIcon from '@suid/icons-material/Delete';
import EditIcon from '@suid/icons-material/Edit';
import NewLanguageModal from "./components/NewLanguageModal";
import {
  openDeleteSyntaxModal,
  setOpenDeleteSyntaxModal,
  setOpenEditSyntaxModal,
  setOpenNewLanguageModal,
  setOpenNewSyntaxModal,
  setSyntaxId,
  setSyntaxKey,
  setSyntaxLanguageId,
  setSyntaxValue,
  syntaxId,
  syntaxKey
} from "./stores/modalStore";
import NewSyntaxModal from "./components/NewSyntaxModal";
import {deleteSyntax} from "./utils/languageAsync";
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
  console.log("Language");

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
            placeholder="Search..."
            onChange={(str) => setSearchLanguage(str)}
          />
        </div>
        <div class="options-right">
          <Button
            class="new-language"
            variant="outlined"
            onClick={() => setOpenNewLanguageModal(true)}>
            <AddCircleOutlineIcon/>
            Add new language
          </Button>
          <Button
            class="new-language"
            variant="outlined"
            onClick={() => setOpenNewSyntaxModal(true)}>
            <PostAddIcon/>
            Add new syntax
          </Button>
        </div>
      </div>
      <TableContainer class="table-container" component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Key</TableCell>
              <TableCell align="left">Language</TableCell>
              <TableCell align="left">Syntax</TableCell>
              <TableCell align="right">Options</TableCell>
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
      <NewLanguageModal/>
      <NewSyntaxModal/>
      <ConfirmationModal
        header={() => "Are you sure you want to delete syntax?"}
        open={openDeleteSyntaxModal}
        setOpen={setOpenDeleteSyntaxModal}
        handleOK={() => deleteSyntax(syntaxId())}
        message={() => `Are you sure you want to delete syntax with key: ### ${syntaxKey()} ###`}
      />
      <EditSyntaxModal/>
    </>
  )
}

export default Language;
