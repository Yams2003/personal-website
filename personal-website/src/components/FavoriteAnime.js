import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Add this import!

function FavoriteAnime() {
  const [animeList, setAnimeList] = useState([]);
  const [error, setError] = useState('');
  const CLIENT_ID = process.env.REACT_APP_MAL_CLIENT_ID; // Get from .env.local

  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        const response = await fetch(
          'https://api.myanimelist.net/v2/users/@me/animelist?fields=title,score,main_picture',
          {
            headers: { 'X-MAL-CLIENT-ID': CLIENT_ID },
          }
        );
        const data = await response.json();

        if (data && data.data) {
          setAnimeList(data.data);
        } else {
          setError('Failed to load anime list.');
        }
      } catch (err) {
        console.error(err);
        setError('Error fetching anime list.');
      }
    };

    fetchAnimeList();
  }, []);

  return (
    <section id="favorite-anime" className="bg-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">My Anime List</h2>

      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {animeList.map(({ node }) => (
          <div key={node.id} className="bg-gray-100 shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
            {/* Wrap the image in a Link */}
            <Link to={`/anime/${node.id}`}>
              <img
                src={node.main_picture.large}
                alt={node.title}
                className="w-full h-auto cursor-pointer"
              />
            </Link>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{node.title}</h3>
              <p className="text-gray-600 mb-4">My Score: {node.score || 'N/A'}</p>
              <a
                href={`https://myanimelist.net/anime/${node.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on MyAnimeList
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FavoriteAnime;
