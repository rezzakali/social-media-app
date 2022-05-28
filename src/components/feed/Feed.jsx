import React from "react";
import BtmPosting from "../bottomPost/BtmPosting";
import Toppost from "../toppost/Toppost";
import "./Feed.css";

function Feed() {
  return (
    <div className="feedContainer">
      <Toppost />
      <BtmPosting />
    </div>
  );
}

export default Feed;
