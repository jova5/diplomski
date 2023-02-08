import {Component, Show} from "solid-js";
import {Box, IconButton, Modal} from "@suid/material";
import "./HomeAddModal.css";
import {
  homeAddDescription,
  homeAddHeader,
  homeAddImage,
  homeAddStoreId,
  homeAddStoreName,
  openHomeAddModal,
  setOpenHomeAddModal
} from "../../store/homeModalStore";
import OpenInNewIcon from '@suid/icons-material/OpenInNew';
import {useNavigate} from "@solidjs/router";
import {visitStoreAsync} from "../../utils/visitAsync";

const HomeAddModal: Component = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpenHomeAddModal(false);
  }

  return (
    <Modal
      open={openHomeAddModal()}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box class="modal">
        <Show when={homeAddImage()}
              fallback={<img src={"../../../../../assets/reklama.png"} height={230} alt="Reklama"/>} keyed>
          <img src={homeAddImage()}
               alt={homeAddHeader()}
               style={{
                 "display": "block",
                 "margin-left": "auto",
                 "margin-right": "auto",
                 "width": "70%",
                 "max-width": "650px"
               }}
          />
        </Show>
        <div style={{padding: '10px'}}>
          <div class="header">
            <p style={{margin: '0', 'font-weight': 600}}>{homeAddHeader()}</p>
          </div>
          <div class="add-store-name">
            {homeAddStoreName()}
            <IconButton
              onClick={async () => {
                await visitStoreAsync(homeAddStoreId());
                navigate(`/store/${homeAddStoreId()}`);
              }}
            >
              <OpenInNewIcon/>
            </IconButton>
          </div>
          <div>
            <p>{homeAddDescription()}</p>
          </div>
        </div>
      </Box>
    </Modal>
  )
}

export default HomeAddModal;
