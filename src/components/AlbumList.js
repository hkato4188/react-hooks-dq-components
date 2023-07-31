import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  let cards = albums.map((album) => {
    return (
      <AlbumCard
        key={album.id}
        name={album.name}
        image={album.image}
        genre={album.genre}
      />
    );
  });
  console.log(cards);
  return <section className="albums">{cards}</section>;
}

export default AlbumList;
