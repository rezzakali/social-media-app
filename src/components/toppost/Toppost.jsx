import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import React from "react";
import "./Toppost.css";

function Toppost() {
  return (
    <div className="feedUserMind">
      <ul>
        <li className="feedUser">
          <img src="/Images/user5.jpg" alt="" className="feedUserImage" />
          <input
            type="text"
            placeholder="What's in your mind ? "
            className="feedUserMindInput"
          />
        </li>
        <hr className="feedUserHr" />
      </ul>
      <ul className="feedUserShareAbleListsContainer">
        <li className="feedUserShareInfo">
          <PhotoLibraryIcon className="photoLibraryIcon" />
          <span>Photo or Video</span>
        </li>
        <li className="feedUserShareInfo">
          <LocalOfferIcon className="LocalOfferIcon" />
          <span>Tag</span>
        </li>
        <li className="feedUserShareInfo">
          <LocationOnIcon className="LocationOnIcon" />
          <span>Location</span>
        </li>
        <li className="feedUserShareInfo">
          <EmojiEmotionsIcon className="EmojiEmotionsIcon" />
          <span>Feelings</span>
        </li>
        <button id="feedShareButton">Share</button>
      </ul>
    </div>
  );
}

export default Toppost;
