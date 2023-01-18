import {Component} from "solid-js";
import SearchIcon from '@suid/icons-material/Search';
import './SearchBar.css';

const SearchBar: Component<
  {
    onChange: (str: string) => void,
    placeholder: string
  }> = (props) => {
  return (
    <div class={"input-box"} style={{"max-width": '600px'}}>
      <SearchIcon/>
      <input
        class="search-input"
        type="text"
        placeholder={props.placeholder}
        onKeyUp={(e) => props.onChange(e.currentTarget.value)}
      />
    </div>
  )
}

export default SearchBar;
