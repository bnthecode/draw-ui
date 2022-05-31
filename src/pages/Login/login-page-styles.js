import { grey } from "@mui/material/colors";

const loginPageStyles = {
  container: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: "10px",
    height: "400px",
    width: "25%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  title: {
    color: "black",
    fontFamily: "cursive",
    fontSize: "46px",
  },
  loginButton: {
    margin: "20px",
    zIndex: 9000,
    fontSize: 16,
    color: "white",
    textTransform: "none",
  },
  toggleBtn: {
    width: "50%",
    textTransform: "none",
  },
  activeStyle: {
    backgroundColor: grey[700],
    color: "white",
  },
};

export default loginPageStyles;
