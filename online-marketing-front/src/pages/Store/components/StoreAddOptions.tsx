import {Component, createSignal} from "solid-js";
import {IconButton, Menu, MenuItem} from "@suid/material";
import {translate} from "../../../utils/languageAsync";
import MoreVertIcon from '@suid/icons-material/MoreVert';
import {
  setStoreAddDescription,
  setStoreAddHeader,
  setStoreAddId,
  setStoreAddImage,
  setStoreAddPremium,
  setStoreDeleteAddModal,
  setStoreOpenAddEdit
} from "../store/storeModalStore";

const StoreAddOptions: Component<{
  header: string,
  description: string,
  premium: boolean,
  image: string,
  addId: number
}> = (props) => {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const open = () => Boolean(anchorEl());
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEditAdd = () => {
    setStoreAddHeader(props.header);
    setStoreAddDescription(props.description);
    setStoreAddPremium(props.premium);
    setStoreAddImage(props.image);
    setStoreAddId(props.addId);
    setAnchorEl(null);
    setStoreOpenAddEdit(true);
  }

  const handleDeleteAdd = () => {
    setAnchorEl(null);
    setStoreDeleteAddModal(true);
  }
  return (
    <>
      <IconButton
        id="basic-button"
        style={{
          "position": "absolute",
          "bottom": "90px",
          "right": "0px"
        }}
        aria-controls={open() ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open() ? "true" : undefined}
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <MoreVertIcon/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl()}
        open={open()}
        onClose={handleClose}
        MenuListProps={{"aria-labelledby": "basic-button"}}
      >
        <MenuItem onClick={() => handleEditAdd()}>
          {translate("edit")}
        </MenuItem>
        <MenuItem onClick={() => handleDeleteAdd()}>
          {translate("delete")}
        </MenuItem>
      </Menu>
    </>
  )
}

export default StoreAddOptions;
