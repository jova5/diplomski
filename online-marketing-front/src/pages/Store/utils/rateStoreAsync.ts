import {translate} from "../../../utils/languageAsync";

async function rateStoreAsync(storeId: number, storeGrade: number): Promise<any> {
  fetch(`http://127.0.0.1:8080/store/${storeId}/grade/${storeGrade}`,
    {
      method: 'PUT',
    })
    .then(res => {
      if (!res.ok) {
        alert(translate("ratingError"));
      }
      res.json()
    })
}

export {rateStoreAsync};
