import {Component, For} from "solid-js";
import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@suid/material";
import {translate} from "../utils/languageAsync";
import {users} from "../stores/adminStore";
import EditIcon from "@suid/icons-material/Edit";
import DeleteIcon from "@suid/icons-material/Delete";

const TableUser: Component = () => {
  return (
    <TableContainer class="table-container" component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{translate("userName")}</TableCell>
            <TableCell align="left">{translate("password")}</TableCell>
            <TableCell align="left">{translate("email")}</TableCell>
            <TableCell align="left">{translate("storeId")}</TableCell>
            <TableCell align="left">{translate("type")}</TableCell>
            <TableCell align="right">{translate("options")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <For each={users()}>
            {
              (value) => {
                return (
                  <TableRow class="table-row" hover={true}
                            sx={{"&:last-child td, &:last-child th": {border: 0}}}
                  >
                    <TableCell align="left">
                      {value.name}
                    </TableCell>
                    <TableCell align="left">{value.password}</TableCell>
                    <TableCell align="left">{value.email}</TableCell>
                    <TableCell align="left">{value.storeId}</TableCell>
                    <TableCell align="left">{value.type}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        class="edit-table-row"
                        onClick={() => {
                        }}>
                        <EditIcon class="edit-table-row-icon"/>
                      </IconButton>
                      <IconButton
                        onClick={() => {
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

export default TableUser;
