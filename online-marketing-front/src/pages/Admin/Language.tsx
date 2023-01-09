import {Component, createResource, For} from "solid-js";
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
import "./Language.css";
import AddCircleOutlineIcon from '@suid/icons-material/AddCircleOutline';
import PostAddIcon from '@suid/icons-material/PostAdd';
import SearchBar from "./components/SearchBar";
import DeleteIcon from '@suid/icons-material/Delete';
import EditIcon from '@suid/icons-material/Edit';
import NewLanguageModal from "./components/NewLanguageModal";
import {
  openDeleteModal, setOpenDeleteModal,
  setOpenNewLanguageModal,
  setOpenNewSyntaxModal, setSyntaxId, setSyntaxKey, syntaxId, syntaxKey
} from "./stores/modalStore";
import NewSyntaxModal from "./components/NewSyntaxModal";
import {deleteSyntax, getLanguagesForTable} from "./utils/languageAsync";
import ConfirmationModal from "./components/ConfirmationModal";
import {renderedLanguageList} from "./stores/adminStore";

const Language: Component = () => {
  console.log("Language");

  const [languages] = createResource(getLanguagesForTable, {initialValue: []});

  // createEffect(() => {
  //   console.log("op")
  //   console.log(renderedLanguageList);
  // });

  return (
    <>
      <div class="options">
        <div class="options-left">
          <SearchBar/>
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
              <TableCell align="left">
                <div onClick={() => console.log("Language tt")}>
                  Language
                </div>
              </TableCell>
              <TableCell align="left">Syntax</TableCell>
              <TableCell align="right">Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <For each={renderedLanguageList}>
              {
                (value) => {
                  return (
                    <TableRow
                      sx={{"&:last-child td, &:last-child th": {border: 0}}}
                    >
                      <TableCell align="left">
                        {value.key}
                      </TableCell>
                      <TableCell align="left">{value.shortName}</TableCell>
                      <TableCell align="left">{value.meaning}</TableCell>
                      <TableCell align="right">
                        <IconButton class="edit-table-row">
                          <EditIcon class="edit-table-row-icon"/>
                        </IconButton>
                        <IconButton
                          onClick={() => {
                          setSyntaxId(value.id);
                          setSyntaxKey(value.key);
                          setOpenDeleteModal(true);
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
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        handleOK={() => deleteSyntax(syntaxId())}
        message={() => `Are you sure you want to delete syntax with key: ### ${syntaxKey()} ###`}/>
    </>
  )
}

export default Language;
