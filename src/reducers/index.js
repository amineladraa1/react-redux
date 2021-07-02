import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "no scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All star", duration: "3:15" },
    { title: "I want it That way", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
