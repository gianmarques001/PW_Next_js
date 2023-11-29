"use client";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

export default function Card({ artista }) {
  //console.log("comida", planta);

  const [favorito, setFavorito] = useState(false);

  function favoritar() {
    setFavorito(true);
  }
  function desfavoritar() {
    setFavorito(false);
  }

  const poster = 'https://www.themoviedb.org/t/p/w200/' + artista.profile_path;
  return (
    <div className="flex flex-col items-center w-48 relative">
      {favorito ? (
        <FavoriteIcon
          onClick={desfavoritar}
          className="text-red-700 absolute top-2 right-2 cursor-pointer "
        />
      ) : (
        <FavoriteBorderIcon
          onClick={favoritar}
          className=" cursor-pointer absolute top-2 right-2"
        />
      )}

      <img src={poster} alt="" />

      <span className="text-lg font-bold line-clamp-1">
        {artista.name}
      </span>
      <div>
        <i></i>
        <span>Popularidade: {artista.popularity.toFixed(2)}</span>
      </div>
      <a
        href="/detalhes"
        className="bg-sky-300 text-black w-full text-center rounded py-1"
      >
      Mais Info
      </a>
    </div>
  );
}
