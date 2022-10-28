import Logo from "../../assets/logo.svg"
import Home from "../../assets/home-active.svg"
import Playlist from "../../assets/playlist-1.svg"
import Profile from "../../assets/profile.svg"
import Logout from "../../assets/Logout.svg"
import Radio from "../../assets/radio.svg"
import Video from "../../assets/videos.svg"

import "./Sidebar.css"

import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="side-bar">
            <img src={Logo} alt="Logo of the musica app" className="logo" />
            <div className="nav__links">
                <Link to="/">
                    <img src={Home} alt="" />
                </Link>
                <Link to="/playlist">
                    <img src={Playlist} alt="" />
                </Link>
                <Link to="/">
                    <img src={Radio} alt="" />
                </Link>
                <Link to="/">
                    <img src={Video} alt="" />
                </Link>
            </div>
            <div className="nav__links nav__links-account">
                <Link to="/profile">
                    <img src={Profile} alt="" />
                </Link>
                <Link to="/logout">
                    <img src={Logout} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;