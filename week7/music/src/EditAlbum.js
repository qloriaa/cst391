import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataSource from './dataSource';

const EditAlbum = (props) => {

    // Assume new Album is being created
    let album = {
        title: '',
        artist: '',
        description: '',
        year: '',
        image: '',
        tracks: [],
    };
    let newAlbumCreation = true;

    // if album is provided in props, then we are Editing an existing album
    //  else, we are creating a new album
    if (props.album) {
        album = props.album;
        newAlbumCreation = false;
    }

    const [albumTitle, setAlbumTitle] = useState(album.title || '');
    const [artist, setArtist] = useState(album.artist || '');
    const [description, setDescription] = useState(album.description || '');
    const [year, setYear] = useState(album.year || '');
    const [image, setImage] = useState(album.image || '');

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
        const editedAlbum = {
            albumId: album.albumId,
            title: albumTitle,
            artist: artist,
            description: description,
            year: year,
            image: image,
            tracks: [],
        };

        console.log(editedAlbum);
        saveAlbum(editedAlbum);
    };

    const saveAlbum = async (album) => {
        let response;

        if (newAlbumCreation) {
            response = await dataSource.post('/albums', album);
        }
        else {
            response = await dataSource.put('/albums', album);
        }

        console.log(response);
        console.log(response.data);
        props.onEditAlbum(navigate);
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
                <h1>{newAlbumCreation ? "Create Album" : "Edit Album"}</h1>
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
                <div align='center' style={{margin: 10}}>
                    <button type='button' className='btn btn-light' onClick={handleCancel}>Cancel</button>
                    <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default EditAlbum;