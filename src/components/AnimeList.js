import React, { useContext } from "react";
import { SearchContext } from "../pages/Home";

export const AnimeList = ({ animeList, setAnimeInfo, animeComponent, handleList }) => {
  const { value } = useContext(SearchContext);

  const AddToList = animeComponent;
  return (
    <>
      {animeList
        ? animeList.map((anime, index) => {
            return (
              <div className="card" key={index} onClick={() => setAnimeInfo(anime)}>
                <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                <div className="anime-info">
                  <h4>{anime.title}</h4>
                  <div className="overlay" onClick={() => handleList(anime)}>
                    <h4>{anime.title_japanese}</h4>
                    <h3>SYNOPSIS</h3>
                    <h3>{value}</h3>
                    <div className="synopsis">
                      <p>{anime.synopsis}</p>
                    </div>
                    <AddToList />
                  </div>
                </div>
              </div>
            );
          })
        : "Not Found"}
    </>
  );
};
