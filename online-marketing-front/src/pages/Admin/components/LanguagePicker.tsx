import {Component, createSignal, For} from "solid-js";
import {IconButton, Menu, MenuItem} from "@suid/material";
import TranslateIcon from '@suid/icons-material/Translate';
import {availableLanguages} from "../stores/adminStore";
import {setSelectedLanguageId} from "../../../stores/languageStore";
import {translate} from "../utils/languageAsync";

const LanguagePicker: Component = () => {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const open = () => Boolean(anchorEl());
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChoseLanguage = (languageId: number) => {
    setSelectedLanguageId(languageId);
    setAnchorEl(null);
  }
  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open() ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open() ? "true" : undefined}
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <TranslateIcon/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl()}
        open={open()}
        onClose={handleClose}
        MenuListProps={{"aria-labelledby": "basic-button"}}
      >
        <For each={availableLanguages()}>
          {
            (language) =>
              <MenuItem onClick={() => handleChoseLanguage(language.id)}>
                {translate(language.longName.toLowerCase())}
              </MenuItem>
          }
        </For>
      </Menu>
    </>
  )
}

export default LanguagePicker;
