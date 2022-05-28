import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer, useState } from 'react';
import Draw2 from './pages/Draw2';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation
} from "react-router-dom";
import Login from './pages/Login';
import Gallery from './pages/Gallery';
import DenseAppBar from './components/AppBar';


const initialState = { currentDrawing: null };

function reducer(state, action) {
  console.log(action.payload, state)
  switch (action.type) {
    case 'select-drawing':
      return { currentDrawing: action.payload };
    default: return null
      
  }
}




const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* <DenseAppBar /> */}
    <Router>
        <Routes>
        <Route path="/gallery" element={<Gallery dispatch={dispatch} state={state} />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/draw" element={<Draw2  dispatch={dispatch} state={state}/>}/>
          <Route path="/draw/:id" element={<Draw2 imageUrl={state.currentDrawing} dispatch={dispatch} state={state}/>}/>
        </Routes>
    </Router>
    </div>
  )

 
}

export default App;


// import { useState } from 'react'
// import axios from 'axios'

// import './App.css'

// async function postImage({image, description}) {
//   const formData = new FormData();
//   formData.append("image", image)
//   formData.append("description", description)

//   const result = await axios.post('http://localhost:8080/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
//   return result.data
// }


// function App() {

//   const [file, setFile] = useState()
//   const [description, setDescription] = useState("")
//   const [images, setImages] = useState([])

//   const submit = async event => {
//     event.preventDefault()
//     const result = await postImage({image: file, description})
//     setImages([result.image, ...images])
//   }

//   const fileSelected = event => {
//     const file = event.target.files[0]
// 		setFile(file)
// 	}

//   return (
//     <div className="App">
//       <form onSubmit={submit}>
//         <input onChange={fileSelected} type="file" accept="image/*"></input>
//         <input value={description} onChange={e => setDescription(e.target.value)} type="text"></input>
//         <button type="submit">Submit</button>
//       </form>

//       { images.map( image => (
//         <div key={image}>
//           <img src={image}></img>
//         </div>
//       ))}

//       <img src="/images/9fa06d3c5da7aec7f932beb5b3e60f1d"></img>

//     </div>
//   );
// }

// export default App;