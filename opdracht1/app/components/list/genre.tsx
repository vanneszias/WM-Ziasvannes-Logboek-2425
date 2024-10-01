import React, { useEffect, useState } from 'react';

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
                const response = await fetch('/api/list/genres');
                const data = await response.json();
                setGenres(data);
            } catch (error) {
                console.error('Error fetching genres:', error);
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
        <div>
            {genres.map((genre) => (
                <div key={genre.id} className='flex justify-between'>
                    <h3 className='text-xl'>{genre.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default GenreList;