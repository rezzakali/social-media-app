import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChatIcon from "@mui/icons-material/Chat";
import EventIcon from "@mui/icons-material/Event";
import GroupIcon from "@mui/icons-material/Group";
import HelpIcon from "@mui/icons-material/Help";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import SchoolIcon from "@mui/icons-material/School";
import VideocamIcon from "@mui/icons-material/Videocam";
import WorkIcon from "@mui/icons-material/Work";
import Button from "@mui/material/Button";
import React from "react";
import "./Sidebar.css";
import SidebarUsers from "./SidebarBottomUser.js";
import SidebarUserList from "./SidebarUserList";

function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon />
            <span>Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon />
            <span>Chats</span>
          </li>
          <li className="sidebarListItem">
            <VideocamIcon />
            <span>Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon />
            <span>Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon />
            <span>Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpIcon />
            <span>Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon />
            <span>Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon />
            <span>Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon />
            <span>Courses</span>
          </li>
        </ul>
        <Button className="btn btn-secondary" id="button">
          Show more
        </Button>
        <hr className="sidebarHr" />

        <div className="friendsContainer">
          <ul className="friendsList">
            {SidebarUsers.map((user, index) => {
              return <SidebarUserList user={user} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
