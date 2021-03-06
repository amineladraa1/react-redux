import React from "react";
import { connect } from "react-redux";

function songDetail({ song }) {
  if (!song) {
    return <div>select a song</div>;
  }
  return (
    <div>
      <h3>Detail for :</h3>
      <p>
        Title : {song.title} <br /> Duration :{song.duration}{" "}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(songDetail);
