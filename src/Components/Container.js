import React from "react";
import Header from "./Header";
import List from "./List";
import Inputfields from "./Inputfields";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      inputValue: {
        title: "",
        artist: "",
        genre: "",
        rating: "",
      },
    };

    this.addSongToList = this.addSongToList.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.deleteSongs = this.deleteSongs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sortSongsAZ = this.sortSongsAZ.bind(this);
    this.sortSongsZA = this.sortSongsZA.bind(this);
  }

  handleChange(event) {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const newFormData = { ...this.state.inputValue };
    newFormData[fieldName] = fieldValue;

    this.setState({
      inputValue: newFormData,
    });
  }

  addSongToList = (event) => {
    event.preventDefault();

    let newSong = {
      id: this.state.songs.length + 1,
      title: this.state.inputValue.title,
      artist: this.state.inputValue.artist,
      genre: this.state.inputValue.genre,
      rating: this.state.inputValue.rating,
    };

    this.setState((prevState) => {
      const newSongsList = [...prevState.songs];
      newSongsList.push(newSong);
      const newState = { ...prevState, songs: newSongsList };
      return newState;
    });
  };

  deleteSong(songId) {
    const updateListSongs = [...this.state.songs];

    const index = this.state.songs.findIndex((song) => song.id === songId);
    updateListSongs.splice(index, 1);

    this.setState({
      songs: updateListSongs,
    });
  }

  deleteSongs() {
    this.setState({
      songs: [],
    });
  }

  sortSongsAZ() {
    const sortSongs = [...this.state.songs].sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });

    this.setState({
      songs: sortSongs,
    });
  }

  sortSongsZA() {
    const sortSongs = [...this.state.songs].sort((a, b) => {
      return a.title < b.title ? 1 : -1;
    });

    this.setState({
      songs: sortSongs,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Inputfields
          songs={this.state.songs}
          onClick={this.addSongToList}
          handleChange={this.handleChange}
          deleteButton={this.deleteSongs}
          sortSongsAZ={this.sortSongsAZ}
          sortSongsZA={this.sortSongsZA}
        />
        <table className="table">
          <thead>
            <tr className="song-header">
              <th className="song-row__item">Song</th>
              <th className="song-row__item">Artist</th>
              <th className="song-row__item">Genre</th>
              <th className="song-row__item">Rating</th>
            </tr>
          </thead>
        </table>
        <List songs={this.state.songs} deleteSong={this.deleteSong} />
      </div>
    );
  }
}

export default Container;
