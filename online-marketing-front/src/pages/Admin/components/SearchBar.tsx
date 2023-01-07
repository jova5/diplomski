import {Component} from "solid-js";
import SearchIcon from '@suid/icons-material/Search';
import './SearchBar.css';
const SearchBar: Component = () => {
  return (
    <div class="input-box">
      <SearchIcon/>
      <input type="text" placeholder="Search..."/>
    </div>
  )
}

export default SearchBar;
