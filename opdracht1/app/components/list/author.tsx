import React, { useEffect, useState } from "react";

interface Author {
  id: number;
  firstName: string;
  lastName: number;
  birthYear: number;
}

const AuthorsList: React.FC = () => {
  const [author, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch("/api/list/authors");
        const data = await response.json();
        setAuthors(data);
      } catch (error) {
        console.error("Error fetching authors:", error);
        setAuthors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    // First check if there are authors to display
    // If there are authors, map over the authors and display each author
    <div>
      {author.length > 0 ? (
        author.map((author) => (
          <div
            key={author.id}
            className="flex justify-between space-x-5 p-3 rounded-xl hover:bg-slate-100 cursor-pointer"
            onClick={() => console.log(author)}
          >
            <p className="w-1/3 text-left h-full self-center">
              {author.firstName}
            </p>
            <p className="w-1/3 text-center h-full self-center">
              {author.lastName}
            </p>
            <p className="w-1/3 text-right h-full self-center">
              {author.birthYear}
            </p>
          </div>
        ))
      ) : (
        <div>No authors found</div>
      )}
    </div>
  );
};

export default AuthorsList;
