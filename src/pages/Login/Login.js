import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import userHttp from "../../http/user-http";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import loginPageStyles from "./login-page-styles";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (alignment === "sign-up") {
      userHttp.createUser(userData);
    }
    navigate("/gallery");
  };

  const [userData, setUserData] = useState({});

  const handleForm = ({ target: { value } }, key) => {
    setUserData({
      ...userData,
      [key]: value,
    });
  };
  const [alignment, setAlignment] = useState("login");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const { container, title, loginButton } = loginPageStyles;
  return (
    <div style={{ width: "100vw", height: "100%" }}>
      <Paper
        elevation={16}
        style={{
          ...container,
        }}
      >
        <Typography style={{ ...title }}> draw!</Typography>
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
          style={{ ...loginButton }}
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
};

export default Login;
