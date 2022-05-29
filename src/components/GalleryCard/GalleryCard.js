import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import galleryCardStyles from "./gallery-card-styles";

const GalleryCard = ({ image, dispatch }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch({ type: "select-drawing", payload: image });
    navigate(`/create/${image._id}`);
  };
  const { description, handle } = galleryCardStyles;
  return (
    <Card elevation={12} onClick={handleClick}>
      <CardActionArea>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GalleryCard;