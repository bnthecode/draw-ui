import logo from "./logo.svg";
import "./App.css";
import { useReducer, useState } from "react";
import Create from "./pages/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Gallery from "./pages/Gallery";

const initialState = { currentDrawing: {} };

function reducer(state = {}, action) {
  switch (action.type) {
    case "select-drawing":
      return { currentDrawing: action.payload };
    default:
      return null;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { currentDrawing: { imgUrl } = {} } = state;
  return (
    <div style={{ width: "100%" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/gallery"
            element={<Gallery dispatch={dispatch} state={state} />}
          />
          <Route path="/create" element={<Create />} />
          <Route path="/create/:id" element={<Create imageUrl={imgUrl} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
