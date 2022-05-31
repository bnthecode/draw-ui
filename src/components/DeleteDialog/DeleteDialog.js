import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import deleteDialogStyles from "./delete-dialog-styles";

const DeleteDialog = ({ dialogOpen, setDialogOpen, imageTitle, onDelete }) => {
  const { button, deleteBtn, cancelBtn } = deleteDialogStyles;
  return (
    <div>
      <Dialog open={Boolean(dialogOpen)}>
        <DialogContent style={{ width: 400, height: 100 }}>
          <Typography style={{ fontFamily: "cursive", marginTop: 24 }}>
            are you sure you want to delete
            <Typography style={{ fontWeight: 800, fontWeight: 800, margin: 8 }}>
              "{imageTitle}" ?
            </Typography>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              ...button,
              ...cancelBtn,
            }}
            onClick={setDialogOpen}
          >
            cancel
          </Button>
          <Button
            style={{
              ...button,
              ...deleteBtn,
            }}
            onClick={onDelete}
          >
            delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
