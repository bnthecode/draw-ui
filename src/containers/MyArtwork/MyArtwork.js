import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import DeleteDialog from "../../components/DeleteDialog/DeleteDialog";
import MyArtworkCard from "../../components/MyArtworkCard/MyArtworkCard";
import drawingHttp from "../../http/drawings-http";

const MyArtwork = ({ dispatch, gallery, fetchArtwork }) => {
  const [dialogOpen, showDialog] = useState(false);
  const [image, setImage] = useState({});

  const handleDialog = (image) => {
    showDialog(!dialogOpen);

    setImage(image);
  };

  const onDelete = async () => {
    await drawingHttp.deleteDrawing(image._id);
    await fetchArtwork();
    handleDialog({});
  };
  return (
    <Grid
      container
      spacing={8}
      style={{
        overflow: "auto",
        width: "100%",
        padding: 20,
      }}
    >
      {gallery.length > 0 ? (
        gallery.map(
          (img, i) =>
            img.imgUrl && (
              <Grid
                style={{ position: "relative" }}
                key={`${img.title}-${i}`}
                item
                xs={12}
                md={4}
              >
                <FontAwesomeIcon
                  style={{
                    zIndex: 1000,
                    fontSize: 36,
                    width: 20,
                    height: 20,
                    position: "absolute",
                    border: "4px solid grey",
                    right: -12,
                    borderRadius: "8px",
                    backgroundColor: "white",
                    padding: 10,
                    top: 50,
                    color: "grey",
                    cursor: "pointer",
                  }}
                  icon={faTimes}
                  onClick={() => handleDialog(img)}
                ></FontAwesomeIcon>
                <MyArtworkCard dispatch={dispatch} image={img} />
              </Grid>
            )
        )
      ) : (
        <h3
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "cursive",
            padding: "10px",
            height: "400px",
            width: "25%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          {" "}
          you don't have any artwork!
        </h3>
      )}
      <DeleteDialog
        setDialogOpen={handleDialog}
        imageTitle={image.title}
        dialogOpen={dialogOpen}
        onDelete={onDelete}
      />
    </Grid>
  );
};

export default MyArtwork;
