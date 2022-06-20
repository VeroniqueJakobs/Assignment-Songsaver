import React from "react";
import SongItem from "./SongItem";

function List(props) {
  return (
    <div>
      {props.songs.map((item) => (
        <SongItem item={item} key={item.id} deleteSong={props.deleteSong} />
      ))}
    </div>
  );
}

export default List;
