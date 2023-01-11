import {Component} from "solid-js";
import SearchBar from "./SearchBar";
import {translate} from "../utils/languageAsync";
import {setSearchLanguage} from "../stores/adminStore";
import {Button} from "@suid/material";
import {setOpenNewSyntaxModal} from "../stores/modalStore";
import PostAddIcon from "@suid/icons-material/PostAdd";
import './OptionsAboveTable.css';

const OptionsAboveTable: Component = () => {
  return (
    <div class="options">
      <div class="options-left">
        <SearchBar
          placeholder={`${translate("search")}...`}
          onChange={(str) => setSearchLanguage(str)}
        />
      </div>
      <div class="options-right">
        <Button
          class="new-something"
          variant="outlined"
          onClick={() => setOpenNewSyntaxModal(true)}>
          <PostAddIcon/>
          {translate("addSyntax")}
        </Button>
      </div>
    </div>
  )
}

export default OptionsAboveTable;
