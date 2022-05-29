import * as React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import userHttp from "../http/user-http";
import { useNavigate } from "react-router-dom";

export default function LayoutTextFields() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (alignment === "sign-up") {
      userHttp.createUser(userData);
    }

    navigate("/gallery");
  };

  const [userData, setUserData] = React.useState({});

  const handleForm = ({ target: { value } }, key) => {
    setUserData({
      ...userData,
      [key]: value,
    });
  };
  const [alignment, setAlignment] = React.useState("login");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div style={{ width: "100vw", height: "100%" }}>
      <Paper
        elevation={16}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          border: "5px solid black",
          padding: "10px",
          height: "400px",
          width: "25%",
          backgroundColor: "#eee",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
          style={{ color: "black", fontFamily: "cursive", fontSize: "46px" }}
        >
          {" "}
          draw!
        </Typography>
        <TextField
          id="username"
          type="text"
          onChange={(e) => handleForm(e, "username")}
          style={{ margin: "20px" }}
          label="username"
        />
        <TextField
          id="password"
          type="password"
          onChange={(e) => handleForm(e, "password")}
          style={{ margin: "20px" }}
          label="password"
        />
        <Button
          style={{
            margin: "20px",
            zIndex: 9000,
            fontSize: 16,
            backgroundColor: "green",
            color: "white",
            textTransform: "none",
            border: "2px solid grey",
          }}
          variant="contained"
          onClick={handleLogin}
        >
          go
        </Button>

        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton
            style={{ width: "50%", textTransform: "none" }}
            value="login"
          >
            login
          </ToggleButton>
          <ToggleButton
            style={{ width: "50%", textTransform: "none" }}
            value="sign-up"
          >
            sign up
          </ToggleButton>
        </ToggleButtonGroup>
      </Paper>
    </div>
  );
}
