import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataSource from './dataSource';

const NewAlbum = (props) => {

    const [albumTitle, setAlbumTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const updateTitle = (event) => {
        setAlbumTitle(event.target.value);
    };
    const updateArtist = (event) => {
        setArtist(event.target.value);
    };
    const updateDescription = (event) => {
        setDescription(event.target.value);
    };
    const updateYear = (event) => {
        setYear(event.target.value);
    };
    const updateImage = (event) => {
        setImage(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log("Submit");
        const album = {
            title: albumTitle,
            artist: artist,
            description: description,
            year: year,
            image: image,
            tracks: [],
        };

        console.log(album);
        saveAlbum(album);
    };

    const saveAlbum = async (album) => {
        const response = await dataSource.post('/albums', album);

        console.log(response);
        console.log(response.data);
        props.onNewAlbum(navigate);
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
                <h1>Create Album</h1>
                <div className="form-group">
                    <label htmlFor="albumTitle">Album Title:</label>
                    <input type="text" 
                        className="form-control" 
                        id="albumTitle" 
                        placeholder="Enter Album Title" 
                        value={albumTitle}
                        onChange={updateTitle}
                    />
                    <label htmlFor="albumArtist">Album Artist:</label>
                    <input type="text" 
                        className="form-control" 
                        id="albumArtist" 
                        placeholder="Enter Album Artist" 
                        value={artist}
                        onChange={updateArtist}
                    />
                    <label htmlFor="albumDescription">Album Description:</label>
                    <input type="text" 
                        className="form-control" 
                        id="albumDescription" 
                        placeholder="Enter a Description of the Album" 
                        value={description}
                        onChange={updateDescription}
                    />
                    <label htmlFor="albumYear">Album Year:</label>
                    <input type="text" 
                        className="form-control" 
                        id="albumYear" 
                        placeholder="Enter Year Album Released" 
                        value={year}
                        onChange={updateYear}
                    />
                    <label htmlFor="albumImage">Album Image:</label>
                    <input type="text" 
                        className="form-control" 
                        id="albumImage" 
                        placeholder="Enter Album Cover Image" 
                        value={image}
                        onChange={updateImage}
                    />
                </div>
                <div align='center'>
                    <button type='button' className='btn btn-light' onClick={handleCancel}>Cancel</button>
                    <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default NewAlbum;