import React from "react";

function Inputfields(props) {
  return (
    <div>
      <form className="form" onSubmit={props.onClick}>
        <button
          type="button"
          className="sortSongsButton"
          onClick={props.sortSongsAZ}
        >
          Sort songlist (a-z)
        </button>
        <button
          type="button"
          className="sortSongsButtonZA"
          onClick={props.sortSongsZA}
        >
          Sort songlist (z-a)
        </button>
        <label className="label">Song title:</label>
        <input
          className="inputField"
          type="text"
          name="title"
          placeholder="Song title"
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
          className="inputField"
          name="genre"
          value={props.songs.genre}
          onChange={props.handleChange}
        >
          <option value="Select genre">Selecteer genre</option>
          <option value="ballad">Ballad</option>
          <option value="country">Country</option>
          <option value="dance">Dance</option>
          <option value="filmmuziek">Filmmuziek</option>
          <option value="jazz">Jazz</option>
          <option value="klassiek">Klassiek</option>
          <option value="opera">Opera</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="trance">Trance</option>
        </select>

        <label>song rating:</label>
        <select
          className="inputField"
          name="rating"
          value={props.songs.rating}
          onChange={props.handleChange}
        >
          <option value="Select rating">Selecteer rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button className="addSongButton">Add song</button>
        <button
          type="button"
          className="deleteButton"
          onClick={props.deleteButton}
        >
          Delete songlist
        </button>
      </form>
    </div>
  );
}

export default Inputfields;
