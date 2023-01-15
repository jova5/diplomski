import {Component, For} from "solid-js";
import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@suid/material";
import {translate} from "../../utils/languageAsync";
import {renderedCategories} from "../../stores/adminStore";
import {setCategoryId, setCategoryName, setOpenDelete, setOpenEditModal} from "../../stores/modalStore";
import EditIcon from "@suid/icons-material/Edit";
import DeleteIcon from "@suid/icons-material/Delete";

const TableCategory: Component = () => {
  return (
    <TableContainer class="table-container" component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{translate("category")}</TableCell>
            <TableCell align="right">{translate("options")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <For each={renderedCategories}>
            {
              (value) => {
                return (
                  <TableRow class="table-row" hover={true}
                            sx={{"&:last-child td, &:last-child th": {border: 0}}}
                  >
                    <TableCell align="left">{value.name}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        class="edit-table-row"
                        onClick={() => {
                          setCategoryId(value.id);
                          setCategoryName(value.name);
                          setOpenEditModal(true);
                        }}>
                        <EditIcon class="edit-table-row-icon"/>
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setCategoryId(value.id);
                          setCategoryName(value.name);
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

export default TableCategory;
