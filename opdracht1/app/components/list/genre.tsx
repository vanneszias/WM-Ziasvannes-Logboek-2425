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
          <div
            key={genre.id}
            className="flex justify-between space-x-5 p-3 rounded-xl hover:bg-slate-100 cursor-pointer"
            onClick={() => console.log(genre)}
          >
            <p className="w-full text-center">{genre.name}</p>
          </div>
        ))
      ) : (
        <div>No genres found</div>
      )}
    </div>
  );
};

export default GenreList;
