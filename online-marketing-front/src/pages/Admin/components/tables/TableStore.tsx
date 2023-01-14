import {Component, For} from "solid-js";
import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@suid/material";
import {translate} from "../../utils/languageAsync";
import {renderedStores} from "../../stores/adminStore";
import {setOpenDelete, setOpenEditModal, setStoreDescription, setStoreId, setStoreName} from "../../stores/modalStore";
import EditIcon from "@suid/icons-material/Edit";
import DeleteIcon from "@suid/icons-material/Delete";

const TableStore: Component = () => {
  return (
    <TableContainer class="table-container" component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{translate("storeName")}</TableCell>
            <TableCell align="left">{translate("storeDescription")}</TableCell>
            <TableCell align="left">{translate("stars")}&star;</TableCell>
            <TableCell align="right">{translate("options")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <For each={renderedStores}>
            {
              (value) => {
                return (
                  <TableRow class="table-row" hover={true}
                            sx={{"&:last-child td, &:last-child th": {border: 0}}}
                  >
                    <TableCell align="left">{value.name}</TableCell>
                    <TableCell align="left">{value.description}</TableCell>
                    <TableCell align="left">{value.sumOfRating === 0 ? 0 : value.sumOfRating / value.numOfRating}&star;</TableCell>
                    <TableCell align="right">
                      <IconButton
                        class="edit-table-row"
                        onClick={() => {
                          setStoreName(value.name);
                          setStoreDescription(value.description);
                          setOpenEditModal(true);
                        }}>
                        <EditIcon class="edit-table-row-icon"/>
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setStoreId(value.id.toString());
                          setStoreName(value.name);
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

export default TableStore;
