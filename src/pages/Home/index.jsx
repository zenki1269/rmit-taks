import TheSidebar from "../../components/TheSidebar/index.jsx";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import {isEmptyObject, typeLocal} from "../../constants/index.js";
import {useNavigate} from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem(typeLocal.ACCOUNT_LOGIN)) || null)

  useEffect(() => {
    if(!profile || isEmptyObject(profile)) navigate('/login')
  }, [profile])

  if(!profile || isEmptyObject(profile)) return
  return <Box>
    <TheSidebar/>
    <h1>Home Page</h1>
  </Box>
}

export default  HomePage