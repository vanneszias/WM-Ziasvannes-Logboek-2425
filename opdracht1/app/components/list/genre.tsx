import React, { useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
}

const GenreList: React.FC = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch("/api/list/genres");
        const data = await response.json();
        setGenres(data);
      } catch (error) {
        console.error("Error fetching genres:", error);
        setGenres([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    // First check if there are genres to display
    // If there are genres, map over the genres and display each genre
    <div>
      {genres.length > 0 ? (
        genres.map((genre) => (
          <div key={genre.id} className="flex justify-between">
            <p>{genre.id}</p>
            <p>{genre.name}</p>
          </div>
        ))
      ) : (
        <div>No genres found</div>
      )}
    </div>
  );
};

const BtnShowGenres = () => {
  const [showGenres, setShowGenres] = useState(false);

  const toggleShowGenres = () => {
    setShowGenres(!showGenres);
  };

  return (
    <>
      <button onClick={toggleShowGenres}>
        {showGenres ? "Hide genres" : "Show genres"}
      </button>
      {showGenres && <GenreList />}
    </>
  );
};

export default BtnShowGenres;
