"use client";
import Card from "@/components/Card";
import Titulo from "@/components/Titulo";
import { useState } from "react";

export default function Home() {
  const [artistas, setArtistas] = useState([]);


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWEyNGM3ZmY4MjgwNjAzYzAxYWQ5MTcyMTMzMWFhZSIsInN1YiI6IjY1Njc2Nzc0ZDk1NDIwMDBmZTMzZGY4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.clhFEemLqSn0j7_gyPB5H8fmvQZ0q6XSC3Ff_fLVqYg'
    }
  };
  
  fetch('https://api.themoviedb.org/3/trending/person/day?language=en-US', options)
    .then(response => response.json())
    .then(response => setArtistas(response.results))
    .catch(err => console.error(err));

  return (
    <>
   
      <title>Senac Celebs</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  
    <main className="flex min-h-screen flex-col">
      <nav className="flex gap-4 justify-between items-end bg-blue-500 w-full p-3">
        <h2 className="flex items-center gap-2 text-5xl  font-bold uppercase">
          SenacLebs
        </h2>
     
      </nav>

      <Titulo>Artistas em Alta </Titulo>
      <section className="flex flex-wrap gap-4 p-4 ">
        {artistas && artistas.map((artista) => (
          <>
            <Card artista={artista}/>
          </>
        ))}
      </section>
      
    </main>
    </>
  );
}
