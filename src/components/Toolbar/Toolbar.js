import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import Fade from "@mui/material/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEraser,
  faEyeDropper,
  faPaintBrush,
  faRuler,
} from "@fortawesome/free-solid-svg-icons";
import toolbarStyles from "./toolbar-styles";

const Toolbar = ({ handleToolbarChange, toolbarOpen, canvasProperties }) => {
  const handleToolbarProperties = (value, key) => {
    handleToolbarChange(value, key);
  };

  const { strokeWidth, strokeColor } = canvasProperties;

  const {
    paper,
    selected,
    listItem,
    dropdownWrapper,
    verticalSlider,
    colorPicker,
    toolbar,
    toolbarIcon,
  } = toolbarStyles;

  const determineSelected = (type, key = "brushType") => {
    return type === canvasProperties[key] ? selected : {};
  };

  const toolbarItems = [
    {
      icon: faPaintBrush,
      id: "brushType",
      dropdownContent: (
        <Paper
          style={{
            ...paper,
          }}
        >
          <Paper
            onClick={() => handleToolbarProperties("round", "brushType")}
            style={{
              ...listItem,
              borderRadius: "50%",
              ...determineSelected("round"),
            }}
          ></Paper>
          <Paper
            onClick={() => handleToolbarProperties("square", "brushType")}
            style={{
              ...listItem,
              ...determineSelected("square"),
            }}
          ></Paper>
          <FontAwesomeIcon
            onClick={() => handleToolbarProperties("#FFFFFF", "strokeColor")}
            style={{
              fontSize: "32px",
              color: "grey",
              ...determineSelected("#FFFFFF", "strokeColor"),
            }}
            icon={faEraser}
          />
        </Paper>
      ),
    },

    {
      icon: faRuler,
      id: "brushSize",
      dropdownContent: (
        <div
          style={{
            ...dropdownWrapper,
          }}
        >
          <Slider
            style={{ ...verticalSlider }}
            onChange={({ target: { value } }) =>
              handleToolbarProperties(value * 3, "strokeWidth")
            }
            min={1}
            orientation="vertical"
            defaultValue={30}
            value={strokeWidth}
            aria-label="Temperature"
          />
        </div>
      ),
    },
    {
      icon: faEyeDropper,
      id: "color",
      dropdownContent: (
        <input
          onChange={({ target: { value } }) =>
            handleToolbarProperties(value, "strokeColor")
          }
          style={{
            ...colorPicker,
          }}
          value={strokeColor}
          id="stroke"
          name="stroke"
          type="color"
        />
      ),
    },
  ];
  return (
    <div>
      {toolbarOpen && (
        <Fade in timeout={500}>
          <Paper
            elevation={24}
            style={{
              ...toolbar,
            }}
          >
            {toolbarItems.map((item, i) => (
              <div
                id={item.id}
                key={`${item.id}-${i}`}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <FontAwesomeIcon
                  style={{
                    ...toolbarIcon,
                  }}
                  icon={item.icon}
                />
                <div style={{ height: 80 }}>{item.dropdownContent}</div>
              </div>
            ))}
          </Paper>
        </Fade>
      )}
    </div>
  );
};

export default Toolbar;
