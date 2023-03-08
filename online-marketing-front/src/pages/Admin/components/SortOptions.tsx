import {Component, createSignal} from "solid-js";
import {IconButton, Menu, MenuItem} from "@suid/material";
import SortIcon from "@suid/icons-material/Sort";

const SortOptions: Component = () => {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const open = () => Boolean(anchorEl());
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        aria-controls={open() ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open() ? "true" : undefined}
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}>
        <SortIcon/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl()}
        open={open()}
        onClose={handleClose}
        MenuListProps={{"aria-labelledby": "basic-button"}}
      >
        <MenuItem onClick={handleClose}>Key</MenuItem>
        <MenuItem onClick={handleClose}>Serbian</MenuItem>
        <MenuItem onClick={handleClose}>English</MenuItem>
      </Menu>
    </>
  )
}

export default SortOptions;
