import "../App.css";
import Canvas from "../components/Canvas";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toolbar from "../components/Toolbar";
import SaveDialog from "../components/SaveDialog";
import drawingsHttp from "../http/drawings-http";

function Draw3({ imageUrl }) {
  useEffect(() => {
    const canvas = document.getElementById("drawing-canvas");
    const ctx = canvas.getContext("2d");

    if (imageUrl) {
      const img = new Image();
      console.log(img);
      img.onload = () => ctx.drawImage(img, 0, 0);
      img.src = imageUrl;
    }
  });

  const [canvasProperties, setCanvasProperties] = useState({
    strokeWidth: 5,
    strokeColor: "#000000",
    brushType: "round",
  });
  const [notificationOpen, setNotificationOpen] = useState(false);

  const navigate = useNavigate();

  const handleToolbarChange = (value, key) => {
    setCanvasProperties({
      ...canvasProperties,
      [key]: value,
    });
  };

  const saveChanges = async ({ title, description, isPublic }) => {
    const canvas = document.getElementById("drawing-canvas");
    var imgUrl = canvas.toDataURL();
    const body = {
      title,
      description,
      imgUrl,
      isPublic,
    };
    await drawingsHttp.createDrawing(body);
    setNotificationOpen(false);
  };

  const clearCanvas = () => {
    const canvas = document.getElementById("drawing-canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  const { strokeWidth, strokeColor, brushType } = canvasProperties;

  const getSelectedProps = (type) => {
    const selectedProps = {
      stroke: "#1976d2",
      strokeWidth: 2,
    };
    return canvasProperties.brushType === type ? { ...selectedProps } : {};
  };
  return (
    <div
      style={{
        height: window.innerHeight,
        width: window.innerWidth,
        backgroundColor: "grey",
        overflow: "hidden",
      }}
    >
      <FontAwesomeIcon
        onClick={() => navigate(-1)}
        style={{
          fontSize: 32,
          position: "fixed",
          top: 20,
          left: 20,
          color: "grey",
        }}
        icon={faArrowLeft}
      />

      <Canvas
        width={window.innerWidth}
        height={window.innerHeight - 20}
        strokeColor={strokeColor}
        brushType={brushType}
        strokeWidth={strokeWidth}
        imageUrl={imageUrl}
      />
      <Button
        onClick={setNotificationOpen}
        style={{
          fontSize: 16,
          position: "fixed",
          top: 20,
          backgroundColor: "white",
          right: 20,
          color: "grey",
          textTransform: "none",
          border: "2px solid grey",
        }}
      >
        save
      </Button>

      <Button
        onClick={clearCanvas}
        style={{
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
        + new
      </Button>
      <Toolbar handleToolbarChange={handleToolbarChange} />
      <SaveDialog
        title="save your masterpiece"
        notificationOpen={notificationOpen}
        setNotificationOpen={setNotificationOpen}
        onSave={saveChanges}
      />
    </div>
  );
}

export default Draw3;
