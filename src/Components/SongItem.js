import React from "react";

function SongItem(props) {
  return (
    <table className="table" style={{ width: "100%" }}>
      <tbody>
        <tr>
          <td
            key={props.item.id}
            id={props.item.id}
            className="list-item"
            value={props.item.title}
          >
            {props.item.title}
          </td>
          <td
            id={props.item.id}
            className="list-item"
            value={props.item.artist}
          >
            {props.item.artist}
          </td>
          <td id={props.item.id} className="list-item" value={props.item.genre}>
            {props.item.genre}
          </td>
          <td
            id={props.item.id}
            className="list-item"
            value={props.item.rating}
          >
            {props.item.rating}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SongItem;
