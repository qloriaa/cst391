import React, { useState } from 'react';
import Card from './Card';
import './App.css';

const App = () => {
    // Hook for Album List
    const [albumList, setAlbumList] = useState ([
        {
            artistId: 0,
            artist: 'The Beatles',
            title: 'Abbey Road',
            description: 'Abbey Road is the eleventh studio album by the English rock band the Beatles, released on 26 September 1969, by Apple Records. It is the last album the group recorded, although Let It Be (1970) was the last album completed before the band\'s break-up in April 1970.',
            year: 1969,
            image:'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg'
        }, 
        {
            artistId: 1,
            artist: 'AC/DC',
            title: 'Back In Black',
            description: 'Back in Black is the seventh studio album by Australian rock band AC/DC, released on 25 July 1980, by Albert Productions and Atlantic Records.',
            year: 1980,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/ACDC_Back_in_Black_cover.svg/440px-ACDC_Back_in_Black_cover.svg.png'
        },
        {
            artistId: 2,
            artist: 'Bon Jovi',
            title: 'Forever',
            description: 'Forever is the sixteenth studio album by American rock band Bon Jovi, released on June 7, 2024, through Island Records. It was preceded by the singles "Legendary" and "Living Proof". ',
            year: 2024,
            image: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Bon_Jovi_-_Forever.png'
        }
        
    ]);

    // Methods

    /**
     * Create a new array of album Cards to display.
     * @returns A new array with each element being the result of the callback function.
     */
    const renderedList = () => {
        return albumList.map((album) => {
            return (
                <Card
                    albumTitle= {album.title}
                    albumDescription= {album.description}
                    buttonText= "OK"
                    imageUrl= {album.image}
                />
            );
        });
    };

    return <div className='container'>{renderedList()}</div>;
};

export default App;