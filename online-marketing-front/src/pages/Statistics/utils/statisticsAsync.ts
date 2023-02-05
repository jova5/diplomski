import {Visit} from "../../../dto/Visit";

async function getStoreVisits(storeId: number): Promise<number> {
  return (await fetch(`http://127.0.0.1:8080/visit/store/${storeId}`, {method: 'GET'})).json().then(
    d => {
      return d.length;
    }
  );
}

async function getStoreAddVisits(storeId: number): Promise<Visit[]> {
  return (await fetch(`http://127.0.0.1:8080/visit/addsForStore/${storeId}`, {method: 'GET'})).json().then(
    d => {
      return d;
    }
  );
}

export {getStoreVisits, getStoreAddVisits};
