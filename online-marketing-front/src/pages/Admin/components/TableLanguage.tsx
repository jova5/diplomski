import {Component, For} from "solid-js";
import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@suid/material";
import {translate} from "../utils/languageAsync";
import {renderedLanguageList} from "../stores/adminStore";
import {
  setOpenDelete,
  setOpenEditSyntaxModal,
  setSyntaxId,
  setSyntaxKey,
  setSyntaxLanguageId,
  setSyntaxValue
} from "../stores/modalStore";
import EditIcon from "@suid/icons-material/Edit";
import DeleteIcon from "@suid/icons-material/Delete";
import "./TableLanguage.css";

const TableLanguage: Component = () => {
  return (
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
                          setOpenDelete(true);
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
  )
}

export default TableLanguage;
