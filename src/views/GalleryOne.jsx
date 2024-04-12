import React from 'react'
import { useState, useEffect } from 'react'


function GalleryOne() { 

  const controller = new AbortController();
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0cfed654b231f3945968be6988e9b08b&text=forest&format=json&nojsoncallback=1');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        const fotos = data.photos.photo.map(foto => {
          const { farm, server, id, secret } = foto;
          return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
        });
        setGallery(fotos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [controller]);

  return (
    <>

     <div className='gallery__div'>
      <p className='gallery__text'>Search: forest</p>
      <ul className='gallery__list'>
       {gallery.map((fotoUrl, index) => (
         <li className='gallery__listItem'><img key={index} src={fotoUrl} alt={`Foto ${index}`} className='gallery__img'/></li>
       ))}
       </ul>
     </div>
    
    </>

  );
}

export default GalleryOne
