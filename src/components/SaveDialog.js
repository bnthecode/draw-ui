import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
export default function SaveDialog({
  notificationOpen,
  setNotificationOpen,
  title,
  onSave,
  children,
}) {
  const [formData, setFormData] = React.useState({
    isPublic: true,
  });

  const handleForm = ({ target: { value, checked, id } }, key) => {
    const data = id === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [key]: data,
    });
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div>
      <Dialog open={notificationOpen} onClose={setNotificationOpen}>
        <DialogTitle style={{ fontFamily: "cursive" }}>{title}</DialogTitle>
        <DialogContent>
          <TextField
            id="title"
            sx={{ width: 500, marginTop: 4 }}
            onChange={(e) => handleForm(e, "title")}
            placeholder="title"
          />
          <TextField
            id="description"
            sx={{ width: 500, marginTop: 4 }}
            multiline
            rows={4}
            maxRows={4}
            onChange={(e) => handleForm(e, "description")}
            placeholder="description"
          />
          <Typography style={{ fontFamily: "cursive", marginTop: 24 }}>
            add my drawing to the public gallery{" "}
            <Checkbox
              id="checkbox"
              onChange={(e) => handleForm(e, "isPublic")}
              defaultChecked
            />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              fontSize: 16,

              backgroundColor: "green",

              color: "white",
              textTransform: "none",
              border: "2px solid grey",
            }}
            onClick={handleSave}
          >
            save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
