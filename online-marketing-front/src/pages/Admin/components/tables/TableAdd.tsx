import {Component, For} from "solid-js";
import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@suid/material";
import {translate} from "../../../../utils/languageAsync";
import {renderedAdds} from "../../stores/adminStore";
import {
  setAddDescription,
  setAddHeader,
  setAddId,
  setAddImage,
  setAddPremium,
  setOpenDelete,
  setOpenEditModal
} from "../../stores/modalStore";
import EditIcon from "@suid/icons-material/Edit";
import DeleteIcon from "@suid/icons-material/Delete";

const TableAdd: Component = () => {
  return (
    <TableContainer class="table-container" component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{translate("header")}</TableCell>
            <TableCell>{translate("storeName")}</TableCell>
            <TableCell align="right">{translate("options")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <For each={renderedAdds}>
            {
              (value) => {
                return (
                  <TableRow class="table-row" hover={true}
                            sx={{"&:last-child td, &:last-child th": {border: 0}}}
                  >
                    <TableCell align="left">{value.header}</TableCell>
                    <TableCell align="left">{value.storeName}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        class="edit-table-row"
                        onClick={() => {
                          setAddId(value.id);
                          setAddHeader(value.header);
                          setAddDescription(value.description);
                          setAddImage(value.image);
                          console.log(value.premium);
                          setAddPremium(value.premium);
                          setOpenEditModal(true);
                        }}>
                        <EditIcon class="edit-table-row-icon"/>
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          setAddId(value.id);
                          setAddDescription(value.description);
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

export default TableAdd;
