const createPageStyles = {
  container: {
    height: window.innerHeight,
    width: window.innerWidth,
    backgroundColor: "grey",
    overflow: "hidden",
  },
  backButton: {
    fontSize: 32,
    position: "fixed",
    top: 20,
    left: 20,
    color: "grey",
    cursor: "pointer",
  },
  button: {
    width: 80,
    position: "absolute",
    textTransform: "none",
    color: "white",
    right: 10,
    border: "3px solid grey",
    textAlign: "center",
    fontWeight: 700,
    height: 40,
    backgroundColor: "grey",
    fontFamily: "cursive",
  },
  buttonIcon: {
    color: "inherit",
    fontSize: "24px",
    margin: 8,
    alignItems: "center",
  },
};

export default createPageStyles;
