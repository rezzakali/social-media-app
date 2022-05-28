import React from "react";
import Feed from "../../feed/Feed";
import Navbar from "../../navbar/Navbar";
import Rightbar from "../../rightbar/Rightbar";
import Sidebar from "../../sidebar/Sidebar";
import "./Profile.css";

function Profile() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/Images/profileCoverImage.jpg"
                alt=""
                className="profileCoverImage"
              />
              <img
                src="/Images/user8.jpg"
                alt=""
                className="profileUserImage"
              />
            </div>
            <div className="profileInfo">
              <div className="profileInfoName">Mohsin Khan</div>
              <span className="profileInfoDesc">Hello friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
