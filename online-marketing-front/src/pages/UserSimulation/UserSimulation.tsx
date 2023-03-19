import {Component, createSignal, For, onCleanup, onMount} from "solid-js";
import {setStoreStore, storeStore} from "../Store/store/storeStore";
import {getStoreById} from "../../utils/storeAsync";
import {rateStoreAsync} from "../Store/utils/rateStoreAsync";
import {visitAddAsync, visitStoreAsync} from "../Home/utils/visitAsync";
import {Adds} from "../../dto/Adds";
import {createStore, produce} from "solid-js/store";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@suid/material";
import {translate} from "../../utils/languageAsync";
import {useParams} from "@solidjs/router";

const list = ["VISIT_STORE", "VISIT_ADD", "RATE_STORE"];

interface Action {
  id: number,
  name: string,
  grade: number
}

const UserSimulation: Component = () => {
  const [adds, setAdds] = createSignal<Adds[]>([]);
  const [actions, setActions] = createStore<Action[]>([]);
  const params = useParams();

  const userSimulation = setInterval(() => randomVisit(), 1000);

  const randomVisit = async () => {
    const random = Math.floor(Math.random() * 3);

    switch (list[random]) {
      case "VISIT_STORE": {
        await visitStoreAsync(+params.storeId);
        setActions(produce(actions => {
          actions.unshift({
            id: +params.storeId,
            name: "VISIT_STORE",
            grade: -1
          })
        }));
      }
        break;
      case "VISIT_ADD": {
        const addsLength = adds().length;
        const randomAdd = adds()[Math.floor(Math.random() * addsLength)];
        await visitAddAsync(randomAdd.id);
        setActions(produce(actions => {
          actions.unshift({
            id: randomAdd.id,
            name: "VISIT_ADD",
            grade: -1
          })
        }));
      }
        break;
      case "RATE_STORE": {
        const grade = Math.floor(Math.random() * 5) + 1;
        await rateStoreAsync(+params.storeId, grade);
        setActions(produce(actions => {
          actions.unshift({
            id: +params.storeId,
            name: "VISIT_ADD",
            grade: grade
          })
        }));
      }
        break;
      default:
        break;
    }
  }

  onMount(async () => {
    setStoreStore(await getStoreById(+params.storeId));
    setAdds(storeStore()!.adds!);
  })

  onCleanup(() => clearInterval(userSimulation));

  return (
    <>
      <TableContainer class="table-container" component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">{translate("action")}</TableCell>
              <TableCell align="center">{translate("id")}</TableCell>
              <TableCell align="center">{translate("grade")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

              <For each={actions}>
                {
                  value => {
                    return (
                      <TableRow class="table-row" hover={true}
                                sx={{"&:last-child td, &:last-child th": {border: 0}}}
                      >
                        <TableCell align="center">{value.name}</TableCell>
                        <TableCell align="center">{value.id}</TableCell>
                        <TableCell align="center">{value.grade}</TableCell>
                      </TableRow>
                    )
                  }
                }
              </For>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default UserSimulation;
