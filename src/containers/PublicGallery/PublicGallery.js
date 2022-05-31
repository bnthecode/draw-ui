import Grid from "@mui/material/Grid";

import PublicGalleryCard from "../../components/PublicGalleryCard/PublicGalleryCard";

const PublicGallery = ({ gallery, dispatch }) => {
  return (
    <Grid
      container
      spacing={8}
      style={{
        overflow: "auto",
        padding: 20,
      }}
    >
      {gallery.map(
        (image, i) =>
          image.imgUrl && (
            <Grid key={`${image.title}-${i}`} item xs={12} md={3}>
              <PublicGalleryCard dispatch={dispatch} image={image} />
            </Grid>
          )
      )}
    </Grid>
  );
};

export default PublicGallery;
