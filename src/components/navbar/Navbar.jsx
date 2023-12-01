import "./Navbar.scss"
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkmModeContext"
import { AuthContext } from "../../context/authContext";
import { notifyManager } from "@tanstack/react-query";
import logoDarkXmas from "../../assets/logoDarkXmas.jpeg";
import logoNormal from "../../assets/logoNormal.jpeg";
import logoNormalDark from "../../assets/logoDarkXmas.jpeg";
const Navbar = () => {


    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span>The Social Edge</span>
                    {/* <span><img src={chrismaslogod} alt="" height="43px" width = "180px" /></span> */}
                </Link>
                <HomeOutlinedIcon />
                {darkMode ? (
                    <WbSunnyOutlinedIcon onClick={toggle} />
                ) : (
                    <DarkModeOutlinedIcon onClick={toggle} />
                )}
                <GridViewOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <Link 
                to={`/profile/${currentUser.id}`}
                style={{ textDecoration: "none", color: "inherit" }}>
                {/* // style={{textDecoration:"none" , color:"black"}} */}
                <div className="user">
                    <img src={currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar