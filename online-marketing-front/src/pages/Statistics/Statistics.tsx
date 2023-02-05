import {Component, createSignal, For, onMount, Show} from "solid-js";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@suid/material";
import {translate} from "../../utils/languageAsync";
import {useNavigate, useParams} from "@solidjs/router";
import {setStoreStore, storeStore} from "../Store/store/storeStore";
import {createStore} from "solid-js/store";
import {getStoreAddVisits, getStoreVisits} from "./utils/statisticsAsync";
import {Visit} from "../../dto/Visit";
import {Store} from "../../dto/Store";
import {getStoreById} from "../../utils/storeAsync";

const Statistics: Component = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [addStore, setAddStore] = createStore<any[]>([]);
  const [storeVisits, setStoreVisits] = createSignal<number>(0);

  onMount(async () => {
    if (localStorage.getItem("user") === null) {
      navigate("/");
    } else {
      const store: Store = await getStoreById(+params.id);
      setStoreStore(store);
      const num = await getStoreVisits(+params.id);
      setStoreVisits(num);
      const addsVisits: Visit[] = await getStoreAddVisits(+params.id);
      let ppp: {
        addHeader: string,
        date: string
      }[] = [];
      addsVisits.forEach(item => {
        const add = storeStore()?.adds?.find(i => i.id === item.addId);
        const date = new Date(item.date);
        ppp.push({
          addHeader: add!.header,
          date: date.toLocaleDateString('sr')
        })
      })
      setAddStore(ppp);
    }
  })

  return (
    <>
      <h2 style={{"text-align": "center"}}>{translate("store")}</h2>
      <Show when={storeStore()} keyed>
        <TableContainer class="table-container" component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">{translate("storeName")}</TableCell>
                <TableCell align="center">{translate("grade")}</TableCell>
                <TableCell align="center">{translate("numOfRatings")}</TableCell>
                <TableCell align="center">{translate("numOfVisits")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow class="table-row" hover={true}
                        sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell align="center">{storeStore()?.name}</TableCell>
                <TableCell align="center">
                  {storeStore()!.sumOfRating === 0 ? 0 : storeStore()!.sumOfRating / storeStore()!.numOfRating}
                </TableCell>
                <TableCell align="center">{storeStore()?.numOfRating}</TableCell>
                <TableCell align="center">{storeVisits()}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Show>
      <h2 style={{"text-align": "center"}}>{translate("add")}</h2>
      <TableContainer class="table-container" component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">{translate("addHeader")}</TableCell>
              <TableCell align="center">{translate("date")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <For each={addStore}>
              {
                (value) => {

                  return (
                    <TableRow class="table-row" hover={true}
                              sx={{"&:last-child td, &:last-child th": {border: 0}}}
                    >
                      <TableCell align="center">{value.addHeader}</TableCell>
                      <TableCell align="center">{value.date}</TableCell>
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

export default Statistics;
