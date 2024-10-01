import React, { useState } from 'react';

const AddGenre: React.FC = () => {
    const [name, setName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newGenre = { name };
        try {
            const response = await fetch('/api/create/genre', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newGenre),
            });
            // Reload the page to see the new genre
            if (response.ok) {
                window.location.reload();
            }
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Genre Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Genre</button>
        </form>
    );
};

export default AddGenre;
