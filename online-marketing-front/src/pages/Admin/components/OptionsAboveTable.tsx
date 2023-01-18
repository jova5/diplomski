import {Component} from "solid-js";
import SearchBar from "../../../components/SearchBar";
import {translate} from "../utils/languageAsync";
import {Button} from "@suid/material";
import PostAddIcon from "@suid/icons-material/PostAdd";
import './OptionsAboveTable.css';

const OptionsAboveTable: Component<{
  buttonTitle: string,
  search: (str: string) => void,
  openModal: (check: boolean) => void
}> = (props) => {
  return (
    <div class="options">
      <div class="options-left">
        <SearchBar
          placeholder={`${translate("search")}...`}
          onChange={(str) => props.search(str)}
        />
      </div>
      <div class="options-right">
        <Button
          class="new-something"
          variant="outlined"
          onClick={() => props.openModal(true)}>
          <PostAddIcon/>
          {translate(props.buttonTitle)}
        </Button>
      </div>
    </div>
  )
}

export default OptionsAboveTable;
