import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navBarContainer">
      <div className="navbarLeftSide">
        <div className="logo">
          <span>AliSocial</span>
        </div>
      </div>
      <div className="navbarCenterSide">
        <div className="navbarCenterSideItem">
          <SearchIcon className="searchIcon" />
          <input type="text" placeholder="Search" className="searchInput" />
        </div>
      </div>
      <div className="navbarRightSide">
        <div className="navbarLinks">
          <span className="navbarLink">Homepage</span>
          <span className="navbarLink">Timeline</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <AccountCircleIcon />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <MailOutlineIcon />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <NotificationsNoneIcon />
            <span className="navbarIconBadge">3</span>
          </div>
        </div>
        <div className="navbarImageContainer">
          <img src="Images/user1.jpeg" alt="" className="navbarImage" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
