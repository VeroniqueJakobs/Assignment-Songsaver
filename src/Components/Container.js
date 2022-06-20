import React from "react";
import Header from "./Header";
import List from "./List";
import Inputfields from "./Inputfields";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          title: "Save your tears",
          artist: "The Weekend",
          genre: "pop",
          rating: "3",
        },
        {
          id: 2,
          title: "Save your tears",
          artist: "The Weekend",
          genre: "pop",
          rating: "3",
        },
        {
          id: 3,
          title: "Save your tears",
          artist: "The Weekend",
          genre: "pop",
          rating: "3",
        },
      ],
      inputValue: {
        title: "",
        artist: "",
        genre: "",
        rating: "",
      },
    };

    this.addSongToList = this.addSongToList.bind(this);
    this.deleteSongs = this.addSongToList.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  deleteSongs() {
    this.setState({
      songs: [],
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
        />
        <table style={{ width: "100%" }}>
          <thead>
            <tr className="song-header">
              <th className="song-row__item">Song</th>
              <th className="song-row__item">Artist</th>
              <th className="song-row__item">Genre</th>
              <th className="song-row__item">Rating</th>
            </tr>
          </thead>
        </table>
        <List songs={this.state.songs} />
      </div>
    );
  }
}

export default Container;
