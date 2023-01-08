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
import SearchBar from "./SearchBar";
import DeleteIcon from '@suid/icons-material/Delete';
import EditIcon from '@suid/icons-material/Edit';
import NewLanguageModal from "./NewLanguageModal";
import {
  renderedLanguageList,
  setAvailableLanguages,
  setOpenNewLanguageModal,
  setOpenNewSyntaxModal,
  setRenderedLanguageList
} from "./modalStore";
import NewSyntaxModal from "./NewSyntaxModal";

const Language: Component = () => {
  console.log("Language");

  const [languages] = createResource(() =>
    fetch('http://127.0.0.1:8080/language', {method: 'GET',})
      .then(res => res.json())
      .then(data => {
        const availableLanguages = data.map((item: any) => {
          return {
            id: item.id,
            longName: item.longName,
            shortName: item.shortName
          }
        });
        setAvailableLanguages(availableLanguages);

        const pom = data.map((item: any) => {
          return item.vocabularies.map((value: any) => {
            return {id: value.id, key: value.key, shortName: item.shortName, meaning: value.meaning}
          })
        });
        let resultLanguageList: any[] = [];
        for (let i = 0; i < pom.length; i++) {
          resultLanguageList = resultLanguageList.concat(pom[i]);
        }
        setRenderedLanguageList(resultLanguageList.sort((a, b) => a.id - b.id));
        return resultLanguageList.sort((a, b) => a.id - b.id);
      }), {initialValue: []}
  );

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
      <TableContainer component={Paper}>
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
            <For each={renderedLanguageList()}>
              {
                (value) =>
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
                      <IconButton>
                        <DeleteIcon class="delete-table-row-icon"/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
              }
            </For>
          </TableBody>
        </Table>
      </TableContainer>
      <NewLanguageModal/>
      <NewSyntaxModal/>
    </>
  )
}

export default Language;
