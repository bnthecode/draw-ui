import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import galleryContentStyles from "./gallery-content-styles";

const GalleryContent = ({ handleNavigation, gallery, dispatch }) => {
  const { button, title, container } = galleryContentStyles;
  return (
    <Grid
      container
      spacing={8}
      style={{
        overflow: "scroll",
        padding: 20,
      }}
    >
      <Button
        onClick={handleNavigation}
        style={{
          ...button,
        }}
      >
        + create new project
      </Button>
      <div style={{ ...container }}>
        {" "}
        <Typography
          style={{
            ...title,
          }}
        >
          {" "}
          Gallery
        </Typography>
      </div>
      {gallery.map(
        (image, i) =>
          image.imgUrl && (
            <Grid key={`${image.title}-${i}`} item xs={12} md={3}>
              <GalleryCard dispatch={dispatch} image={image} />
            </Grid>
          )
      )}
    </Grid>
  );
};

export default GalleryContent;
