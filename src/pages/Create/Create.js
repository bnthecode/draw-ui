import "../../App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faWrench } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import Canvas from "../../components/Canvas/Canvas";
import SaveDialog from "../../components/SaveDialog/SaveDialog";
import drawingsHttp from "../../http/drawings-http";
import { getCanvasProps } from "../../utilities";
import Toolbar from "../../components/Toolbar/Toolbar";
import createPageStyles from "./create-page-styles";
import moment from "moment";

const Create = () => {
  useEffect(() => {
    const { ctx } = getCanvasProps();
    const fetchDrawing = async () => {
      const imageId = window.location.href.split("/")[4] || "";
      if (imageId) {
        const drawing = await drawingsHttp.getDrawing(imageId);
        setImage(drawing);
        const img = new Image();
        img.onload = () => ctx.drawImage(img, 0, 0);
        img.src = drawing.imgUrl;
      }
    };
    fetchDrawing();
  });

  const [canvasProperties, setCanvasProperties] = useState({
    strokeWidth: 5,
    strokeColor: "#000000",
    brushType: "round",
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [toolbarOpen, setToolbarOpen] = useState(false);
  const [image, setImage] = useState({});
  const [elapsedTime, setElapsedTime] = useState(moment());

  const navigate = useNavigate();

  const handleToolbarChange = (value, key) => {
    setCanvasProperties({
      ...canvasProperties,
      [key]: value,
    });
  };
  const handleToolbarToggle = () => {
    setToolbarOpen(!toolbarOpen);
  };

  const saveChanges = async ({ title, description, isPublic }) => {
    // we are currently creating a new image every time, so we dont need to add elapsed time.
    const canvas = document.getElementById("drawing-canvas");
    var imgUrl = canvas.toDataURL();
    const body = {
      title,
      description,
      imgUrl,
      isPublic,
      elapsedTime: elapsedTime.diff(moment(), "minutes"),
    };
    await drawingsHttp.createDrawing(body);
    setNotificationOpen(false);
  };

  const clearCanvas = () => {
    const { canvas, ctx } = getCanvasProps();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setElapsedTime(0);
  };
  const { strokeWidth, strokeColor, brushType } = canvasProperties;
  const { container, backButton, button, buttonIcon } = createPageStyles;
  return (
    <div
      id="drawing-container"
      style={{
        ...container,
      }}
    >
      <FontAwesomeIcon
        id="navigate-back-button"
        onClick={() => navigate(-1)}
        style={{
          ...backButton,
        }}
        icon={faArrowLeft}
      />
      <Canvas
        width={window.innerWidth}
        height={window.innerHeight - 20}
        strokeColor={strokeColor}
        brushType={brushType}
        strokeWidth={strokeWidth}
        imageUrl={image.imgUrl}
      />
      <Button
        id="save-drawing-button"
        style={{ ...button, top: 20 }}
        onClick={() => setNotificationOpen(true)}
      >
        save
      </Button>

      <Button
        id="clear-canvas-button"
        onClick={clearCanvas}
        style={{
          ...button,
          top: 80,
        }}
      >
        + new
      </Button>

      <Button
        id="toolbar-button"
        onClick={handleToolbarToggle}
        style={{
          ...button,
          top: 140,
        }}
      >
        <FontAwesomeIcon
          id="toolbar-button-icon"
          style={{
            ...buttonIcon,
          }}
          icon={faWrench}
        ></FontAwesomeIcon>
      </Button>

      <Toolbar
        canvasProperties={canvasProperties}
        toolbarOpen={toolbarOpen}
        handleToolbarToggle={handleToolbarToggle}
        handleToolbarChange={handleToolbarChange}
      />

      <SaveDialog
        notificationOpen={notificationOpen}
        setNotificationOpen={setNotificationOpen}
        onSave={saveChanges}
      />
    </div>
  );
};

export default Create;
