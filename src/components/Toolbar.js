import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
const Toolbar = ({ handleToolbarChange }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        left: "calc(50% - 550px)",
      }}
    >
      <Paper
        id="toolbar"
        style={{
          border: "3px solid grey",
          position: "absolute",
          bottom: 0,
          display: "flex",
          flexDirection: "row",
          left: "calc(50% - 500px)",
          transition: "height 1s",
          borderRadius: 8,
          height: 60,
          width: 1000,
          margin: 6,
        }}
        elevation={24}
      >
        <div
          style={{
            margin: 8,
            width: "33%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            style={{
              fontSize: 18,
              color: "grey",
              fontFamily: "cursive",
              margin: 6,
              fontWeight: 800,
            }}
          >
            Brush size
          </Typography>
          <Slider
            onChange={(e) => {
              handleToolbarChange(e.target.value, "strokeWidth");
            }}
            style={{ width: 100, margin: 6 }}
            aria-label="Temperature"
            defaultValue={30}
            color="primary"
          />
        </div>
        <div
          style={{
            margin: 8,
            width: "33%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            style={{
              fontSize: 18,
              color: "grey",
              fontFamily: "cursive",
              margin: 6,
              fontWeight: 800,
            }}
          >
            Color
          </Typography>
          <input
            onChange={(e) => {
              handleToolbarChange(e.target.value, "strokeColor");
            }}
            style={{ width: 40, height: 40, margin: 2 }}
            id="stroke"
            name="stroke"
            type="color"
          />
        </div>
        <div
          style={{
            margin: 8,
            width: "50%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            style={{
              fontSize: 18,
              color: "grey",
              fontFamily: "cursive",
              fontWeight: 800,
              margin: 6,
            }}
          >
            Brush type
          </Typography>
          <Select
            style={{ width: 200, margin: 6 }}
            labelId="demo-simple-select-label"
            placeholder="Brush type"
            id="demo-simple-select"
            onChange={(e) => handleToolbarChange(e.target.value, "brushType")}
          >
            <MenuItem value="round">round</MenuItem>
            <MenuItem value="square">square</MenuItem>
            <MenuItem value="butt">butt</MenuItem>
            <MenuItem value="dotted">dotted</MenuItem>
          </Select>
        </div>
      </Paper>
    </div>
  );
};

export default Toolbar;
