import React, { useEffect, useState } from 'react';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Yams2003/repos');
        const data = await response.json();

        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          setError('Failed to load repositories.');
          console.error('GitHub API Error:', data);
        }
      } catch (error) {
        setError('Error fetching repositories.');
        console.error(error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="bg-gray-100 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      {error && <p className="text-center text-red-500 mb-8">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Array.isArray(repos) &&
          repos.map((repo) => (
            <div key={repo.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-600 text-xl font-bold">
                {repo.name}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
                <p className="text-gray-600 mb-4">
                  {repo.description ? repo.description : 'No description provided.'}
                </p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Projects;
