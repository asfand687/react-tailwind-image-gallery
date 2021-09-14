import React, { useState } from 'react';

const ImageSearch = ({ updateSearch }) => {
  const [text, setText] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    updateSearch(text);
  };
  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={formSubmit} className='w-full max-w-sm'>
        <div className='flex items-center border-b border-b-2'>
          <input
            type='text'
            className='appearance-none bg-transparent border-none w-full pl-2'
            placeholder='Search Image'
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type='submit'
            className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
