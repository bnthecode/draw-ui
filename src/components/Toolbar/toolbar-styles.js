const toolbarStyles = {
  paper: {
    height: "120px",
    width: "60px",
    border: "3px solid grey",
    position: "relative",
    left: "-30px",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  listItem: {
    height: "25px",
    width: "25px",
    border: "3px solid grey",
  },
  selected: {
    border: "4px solid #0096FF",
  },
  dropdownWrapper: {
    position: "relative",
    left: "-10px",
    padding: 4,
    backgroundColor: "transparent",
    height: "120px",
  },
  verticalSlider: {
    color: "grey",
    marginTop: "20px",
    height: "120px",
  },
  colorPicker: {
    height: 80,
    width: 80,
    position: "relative",
    left: "-30px",
    marginTop: "20px",
  },
  toolbar: {
    margin: 24,
    display: "flex",
    flexDirection: "row",
    height: 200,
    width: 500,
    backgroundColor: "white",
    position: "absolute",
    border: "3px solid grey",
    padding: 12,
    top: 0,
    left: "calc(50% - 250px)",
    justifyContent: "space-around",
  },
  toolbarIcon: {
    cursor: "pointer",
    color: "grey",
    fontSize: 24,
  },
};

export default toolbarStyles;
