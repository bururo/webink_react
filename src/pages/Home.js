import React, { useEffect, useState, createContext } from 'react';
import { AnimeList } from '../components/AnimeList';
import { AnimeInfo } from '../components/AnimeInfo';
import { AddToList } from '../components/AddToList';
import { RemoveFromList } from '../components/RemoveFromList';
import { MuiAppBar } from '../components/MuiAppBar';

export const SearchContext = createContext(null);

export const Home = () => {
  const [search, setSearch] = useState('');
  const [animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState();
  const [myAnimeList, setMyAnimeList] = useState([]);

  const addTo = (anime) => {
    const index = myAnimeList.indexOf((myanime) => {
      return myanime.mal_id === anime.mal_id;
    });
    if (index < 0) {
      const newArray = [...myAnimeList, anime];
      setMyAnimeList(newArray);
    }
  };

  const removeFrom = (anime) => {
    const newArray = myAnimeList.filter((myanime) => {
      return myanime.mal_id !== anime.mal_id;
    });
    setMyAnimeList(newArray);
  };

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://api.jikan.moe/v4/manga?q=${search}&limit=20`);
      const result = await response.json();
      setAnimeData(result.data);
    }

    getData();
  }, [search]);

  return (
    <SearchContext.Provider
      value={{
        value: search,
        setValue: setSearch,
      }}
    >
      {/* I could use the set in MuiAppBar instead the SearchContext */}
      <MuiAppBar />
      <div className="container">
        <div className="animeInfo">{animeInfo && <AnimeInfo animeInfo={animeInfo} />}</div>
        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeList
              animeList={animeData}
              setAnimeInfo={setAnimeInfo}
              animeComponent={AddToList}
              handleList={(anime) => addTo(anime)}
            />
          </div>
          <h2 className="text-heading">My List</h2>
          <div className="row">
            <AnimeList
              animeList={myAnimeList}
              setAnimeInfo={setAnimeInfo}
              animeComponent={RemoveFromList}
              handleList={(anime) => removeFrom(anime)}
            />
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
};
