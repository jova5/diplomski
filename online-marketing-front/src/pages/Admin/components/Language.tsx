import {Component, mapArray} from "solid-js";
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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return {name, calories, fat, carbs, protein};
}

const rows = [
  createData("Frozen yoghurt", 156, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Language: Component = () => {
  console.log("Language");
  return (
    <>
      <div class="options">
        <div class="options-left">
          <SearchBar/>
        </div>
        <div class="options-right">
          <Button class="new-language" variant="outlined">
            <AddCircleOutlineIcon/>
            Add new language
          </Button>
          <Button class="new-language" variant="outlined">
            <PostAddIcon/>
            Add new syntax
          </Button>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Key</TableCell>
              <TableCell align="left">
                <div onClick={() => console.log("Calories")}>
                  Serbian
                </div>
              </TableCell>
              <TableCell align="left">English</TableCell>
              <TableCell align="right">Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mapArray(
              () => rows,
              (row) => (
                <TableRow
                  sx={{"&:last-child td, &:last-child th": {border: 0}}}
                >
                  {/*<TableCell component="th" scope="row">*/}
                  {/*  {row.name}*/}
                  {/*</TableCell>*/}
                  <TableCell align="left">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="right">
                    <IconButton class="edit-table-row">
                      <EditIcon class="edit-table-row-icon"/>
                    </IconButton>
                    <IconButton>
                      <DeleteIcon class="delete-table-row-icon"/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Language;
