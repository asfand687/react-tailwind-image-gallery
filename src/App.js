import React, { useState, useEffect } from 'react';
import ImageSearch from './components/ImageSearch';
import ImageCard from './components/ImageCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
        );
        const data = await response.json();
        setImages(data.hits);
        setIsLoading(false);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, [term]);
  return (
    <div className='container mx-auto'>
      <ImageSearch updateSearch={(value) => setTerm(value)} />
      {!isLoading && images.length === 0 && (
        <h1 className='text-5xl text-center mx-auto mt-32'>No Images Found</h1>
      )}
      {isLoading ? (
        <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1>
      ) : (
        <div className='grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3  md:gap-8 lg:gap-4'>
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
