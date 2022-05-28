import React from "react";
import BottomPost from "./BottomPost";
import PostedDataItems from "./post/PostedDataItems";

function BtmPosting() {
  return (
    <div>
      {PostedDataItems.map((item, index) => {
        return <BottomPost key={index} item={item} />;
      })}
    </div>
  );
}

export default BtmPosting;
