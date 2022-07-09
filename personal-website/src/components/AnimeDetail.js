import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AnimeDetail() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [error, setError] = useState('');
  const CLIENT_ID = process.env.REACT_APP_MAL_CLIENT_ID;

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await fetch(
          `https://api.myanimelist.net/v2/anime/${id}?fields=title,synopsis,score,main_picture`,
          {
            headers: { 'X-MAL-CLIENT-ID': CLIENT_ID },
          }
        );
        const data = await response.json();

        if (data) {
          setAnime(data);
        } else {
          setError('Anime details not found.');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to fetch anime details.');
      }
    };

    fetchAnimeDetails();
  }, [id]);

  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!anime) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <img src={anime.main_picture.large} alt={anime.title} className="w-full h-auto rounded-lg" />
      <h2 className="text-3xl font-bold mt-4">{anime.title}</h2>
      <p className="text-gray-600 mt-2">Score: {anime.score}</p>
      <p className="mt-4">{anime.synopsis}</p>
      <a
        href={`https://myanimelist.net/anime/${id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline mt-4 block"
      >
        View on MyAnimeList
      </a>
    </div>
  );
}

export default AnimeDetail;
