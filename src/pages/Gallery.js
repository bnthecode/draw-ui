import axios from "axios";
import { useEffect, useState } from "react";
import GalleryCard from "../components/GalleryCard";
import Grow from "@mui/material/Grow";

import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import drawingHttp from "../http/drawings-http";
const Gallery = ({ dispatch }) => {
  const nav = useNavigate();
  const [gallery, setGallery] = useState([]);
  const [loadingContent, setLoadingContent] = useState(true);
  const [selected, setSelected] = useState({});

  const fetchArtwork = async () => {
    const data = await drawingHttp.getDrawings();
    setGallery(data);
    setLoadingContent(false);
  };

  const navigate = () => {
    nav("/create");
  };
  useEffect(() => {
    fetchArtwork();
  }, []);

  const detmermineContent = () => {
    if (loadingContent)
      return (
        <div
          style={{
            position: "absolute",
            width: window.innerWidth,
            textAlign: "center",
            top: "40%",
            padding: "10px",
          }}
        >
          <FontAwesomeIcon
            style={{
              color: "grey",
              animation: "shake 5s cubic-bezier(.6,.07,.19,.97) both",
              fontSize: 100,
            }}
            icon={faPencilAlt}
          ></FontAwesomeIcon>
          <h2
            style={{
              color: "grey",
            }}
          >
            loading gallery ...
          </h2>
        </div>
      );
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
          onClick={navigate}
          style={{
            zIndex: 9000,
            fontSize: 16,
            position: "fixed",
            backgroundColor: "white",
            top: 80,
            right: 20,
            color: "grey",
            textTransform: "none",
            border: "2px solid grey",
          }}
        >
          + create new project
        </Button>
        <div style={{ width: "100%", textAlign: "center" }}>
          {" "}
          <Typography
            style={{
              color: "black",
              fontFamily: "cursive",
              fontSize: "52px",
              marginTop: 80,
            }}
          >
            {" "}
            Gallery
          </Typography>
        </div>
        {gallery.length > 0 ? (
          gallery.map(
            (drawing) =>
              drawing.imgUrl && (
                <Grid item xs={3}>
                  <GalleryCard
                    setSelected={setSelected}
                    dispatch={dispatch}
                    image={drawing}
                  />
                </Grid>
              )
          )
        ) : (
          <div
            style={{
              position: "absolute",
              textAlign: "center",
              top: "300px",
              right: "calc(50% - 30px)",
            }}
          >
            nothing in the gallery!
          </div>
        )}
      </Grid>
    );
  };

  return detmermineContent();
};

export default Gallery;
