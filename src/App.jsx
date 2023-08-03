
import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home/index.jsx";
import ProfilePage from "./pages/Profile/index.jsx";
import RegisterPage from "./pages/Register/index.jsx";
import LoginPage from "./pages/Login/index.jsx";
import CssBaseline from '@mui/material/CssBaseline';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </>
  )
}

export default App
