import "./App.css";
import { useReducer } from "react";
import Create from "./pages/Create/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Gallery from "./pages/Gallery/Gallery";

const initialState = { currentDrawing: {}, currentUser: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "select-drawing":
      return { currentDrawing: action.payload };
    default:
      return null;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { currentDrawing: { imgUrl } = {} } = state;

  return (
    <div style={{ width: "100%" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/gallery/*" element={<Gallery dispatch={dispatch} />} />
          <Route path="/create" element={<Create />} />
          <Route path="/create/:id" element={<Create imageUrl={imgUrl} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
