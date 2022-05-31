import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import saveDialogStyles from "./save-dialog-styles";

const SaveDialog = ({ dialogOpen, setDialogOpen, onSave, image }) => {
  const [formData, setFormData] = React.useState({
    isPublic: true,
  });
  React.useEffect(() => {
    if (image && image.imgUrl) {
      setFormData({
        title: image.title,
        description: image.description,
        isPublic: image.isPublic,
      });
    }
  }, [image]);

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
  const { saveButton } = saveDialogStyles;
  return (
    <div>
      <Dialog open={Boolean(dialogOpen)} onClose={setDialogOpen}>
        <DialogTitle style={{ fontFamily: "cursive" }}>
          save your masterpiece
        </DialogTitle>
        <DialogContent>
          <TextField
            id="title"
            sx={{ width: 500, marginTop: 4 }}
            onChange={(e) => handleForm(e, "title")}
            placeholder="title"
            value={formData.title}
          />
          <TextField
            id="description"
            sx={{ width: 500, marginTop: 4 }}
            multiline
            rows={4}
            onChange={(e) => handleForm(e, "description")}
            placeholder="description"
            value={formData.description}
          />
          <Typography style={{ fontFamily: "cursive", marginTop: 24 }}>
            add my drawing to the public gallery{" "}
            <Checkbox
              id="checkbox"
              onChange={(e) => handleForm(e, "isPublic")}
              defaultChecked
              value={formData.isPublic}
            />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              ...saveButton,
            }}
            onClick={handleSave}
          >
            save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SaveDialog;
