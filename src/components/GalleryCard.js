import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ActionAreaCard({ image, dispatch }) {
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch({ type: "select-drawing", payload: image });
    navigate(`/create/${image._id}`);
  };

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
            className="scrollbar"
            style={{
              fontFamily: "cursive",
              height: 200,
              overflowY: "scroll",
            }}
            variant="body2"
            color="text.secondary"
          >
            {image.description || "no descrtiption"}
          </Typography>

          <Typography
            style={{
              fontFamily: "cursive",
              fontSize: 18,
              fontWeight: 700,
              textAlign: "center",
              marginTop: "12px",
            }}
            color="text.secondary"
          >
            @{image.creator || ""}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// export default function ActionAreaCard({ image, setSelected }) {
//     return (
//       <Card
//         onClick={() => {
//           setSelected(image);
//         }}
//       >
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height={260}
//             image={image.imgUrl}
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {image.title || "no title"}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {image.description || "no descrtiptiop"}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     );
//   }
