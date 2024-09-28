'use client';
import InputApi from './components/input-api';

export default function Home() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-slate-200'>
      <div className='text-justify space-y-5 bg-slate-400 p-10 rounded-xl'>
        <h1 className='text-center p-4 text-slate-800'>Opdract 1 - API interface</h1>
        <a href="/api/" className='text-slate-600 hover:text-slate-800' >Static API</a>
        <InputApi />
      </div>
    </div>
  );
}
/*
  ToDo: 
   * Put the API output on this page

*/