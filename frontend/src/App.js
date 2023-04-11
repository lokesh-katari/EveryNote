import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import NoteState from "./context/NoteState";
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
