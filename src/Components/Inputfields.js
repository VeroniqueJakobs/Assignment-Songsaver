import React from "react";

function Inputfields(props) {
  return (
    <div>
      <form className="form" onSubmit={props.onClick}>
        <label>song title:</label>
        <input
          className="inputField"
          type="text"
          name="title"
          placeholder="title"
          value={props.songs.title}
          onChange={props.handleChange}
        />
        <label>song artist:</label>
        <input
          className="inputField"
          type="text"
          name="artist"
          placeholder="artist"
          value={props.songs.artist}
          onChange={props.handleChange}
        />
        <label>song genre:</label>
        <select
          className="selectField"
          name="genre"
          value={props.songs.genre}
          onChange={props.handleChange}
        >
          <option value="ballad">ballad</option>
          <option value="country">country</option>
          <option value="dance">dance</option>
          <option value="filmmuziek">filmmuziek</option>
          <option value="jazz">jazz</option>
          <option value="klassiek">klassiek</option>
          <option value="opera">opera</option>
          <option value="pop">pop</option>
          <option value="rock">rock</option>
          <option value="trance">trance</option>
        </select>

        <label>song rating:</label>
        <select
          className="selectField"
          name="rating"
          value={props.songs.rating}
          onChange={props.handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button className="addSongButton">Add song</button>
      </form>
    </div>
  );
}

export default Inputfields;
