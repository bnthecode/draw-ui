import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import myArtworkStyles from "./my-artwork-card-styles";

const MyArtworkCard = ({ image, dispatch }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch({ type: "select-drawing", payload: image });
    navigate(`/create/${image._id}`);
  };
  const { description, handle } = myArtworkStyles;
  return (
    <Card elevation={12} onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          style={{ maxHeight: 200 }}
          component="img"
          image={image.imgUrl}
          alt={image.title || "no title"}
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
          >
            {image.description || "no descrtiption"}
          </Typography>

          <Typography
            style={{
              ...handle,
            }}
          ></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MyArtworkCard;
