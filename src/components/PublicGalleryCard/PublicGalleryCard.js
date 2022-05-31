import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import galleryCardStyles from "./public-gallery-card-styles";
import moment from "moment";
const GalleryCard = ({ image }) => {
  const { description, handle } = galleryCardStyles;

  return (
    <Card elevation={12}>
      <CardMedia
        style={{ maxHeight: 200 }}
        component="img"
        image={image.imgUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          style={{ fontFamily: "cursive" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {image.title || "no title"}
        </Typography>
        <Typography
          style={{
            ...description,
          }}
          variant="body2"
          color="text.secondary"
        >
          {image.description || "no descrtiption"}
        </Typography>
        <Typography
          style={{
            ...handle,
          }}
          color="text.secondary"
        >
          @{image.creator || ""}
        </Typography>
        <Typography
          style={{
            ...description,
            height: 40,
          }}
          color="text.secondary"
        >
          finished in {Math.abs(image.elapsedTime)} minutes
        </Typography>
        <Typography
          style={{
            ...description,
            height: 30,
          }}
          color="text.secondary"
        >
          created on {moment(image.createdAt).format("ll")}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;
