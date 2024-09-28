import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const InputApi: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim()) {
            router.push(`/api/tests/${inputValue}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex justify-between'>
            <input
                className='p-2 mr-5 rounded-xl'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter ID"
            />
            <button type="submit" className='rounded-xl p-3 bg-slate-200 hover:bg-slate-900 hover:text-slate-300' >Go</button>
        </form>
    );
};

export default InputApi;