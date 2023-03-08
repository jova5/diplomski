import {Component, createSignal, Show} from "solid-js";
import "./StarRating.css";
import {storeStore} from "../store/storeStore";
import {rateStoreAsync} from "../utils/rateStoreAsync";
import {translate} from "../../../utils/languageAsync";

const StarRating: Component = () => {
  const [disableRating, setDisableRating] = createSignal<boolean>(false);
  const rateStore = async (grade: number) => {
    console.log(grade);
    await rateStoreAsync(storeStore()!.id, grade);
    setDisableRating(true);
  }

  return (
    <>
      <Show when={!disableRating()} keyed>
        <div class="rate">
          <input type="radio" id="star5" name="rate" value="5"/>
          <label onClick={() => rateStore(5)} for="star5" title="text"></label>
          <input type="radio" id="star4" name="rate" value="4"/>
          <label onClick={() => rateStore(4)} for="star4" title="text"></label>
          <input type="radio" id="star3" name="rate" value="3"/>
          <label onClick={() => rateStore(3)} for="star3" title="text"></label>
          <input type="radio" id="star2" name="rate" value="2"/>
          <label onClick={() => rateStore(2)} for="star2" title="text"></label>
          <input type="radio" id="star1" name="rate" value="1"/>
          <label onClick={() => rateStore(1)} for="star1" title="text"></label>
          <p style={{"padding-left": "10px"}}>{storeStore()?.sumOfRating === undefined || storeStore()!.sumOfRating === 0 ? 0 :
            (storeStore()!.sumOfRating / storeStore()!.numOfRating).toFixed(2)}</p>
        </div>
      </Show>
      <Show when={disableRating()} keyed>
        <p style={{"text-align": "center"}}>{translate("rating") + " "}{storeStore()?.sumOfRating === 0 ? 0 :
          (storeStore()!.sumOfRating / storeStore()!.numOfRating).toFixed(2)}</p>
      </Show>
    </>


  )
}

export default StarRating;
