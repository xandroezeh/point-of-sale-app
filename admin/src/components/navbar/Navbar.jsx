import "./navbar.css";
import { Language, NotificationsNone, Settings } from '@mui/icons-material';
export default function Navbar() {
   return ( 
    <div className="navbar">
        <div className="navbarWrapper">
            <div className="navbarLeft">
                <span className="logo">POS Admin</span>
            </div>
            <div className="navbarRight">
                <div className="navbarIconContainer">
                    <NotificationsNone/>
                    <span className="navbarIconBadge">5</span>
                </div>
                <div className="navbarIconContainer">
                    <Language/>
                    <span className="navbarIconBadge">5</span>
                </div>
                <div className="navbarIconContainer">
                    <Settings/>
                </div>
                <img src="../images/labcoat.jpg" alt="avatar" className="navAvatar" />
            </div>

        </div>
    </div>
    )
}