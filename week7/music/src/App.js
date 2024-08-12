import React, { useState, useEffect } from 'react';
// BrowserRouter: The wrapper component for router components.
// Routes: The immediate parent component of an individual Route.
// Route: Defines an individual Route in the application.
import { Route, Routes, BrowserRouter } from 'react-router-dom';
//import { createMemoryHistory } from 'history';

import dataSource from './dataSource';
//import albums from './albums.json';
import './App.css';

import SearchAlbum from './SearchAlbum';
import NavBar from './NavBar';
import NewAlbum from './NewAlbum';
import OneAlbum from './OneAlbum';
import EditAlbum from './EditAlbum';

const App = (props) => {
    // Hook for Album List
    const [albumList, setAlbumList] = useState ([]);
    const [searchPhrase, setSearchPhrase] = useState ('');
    const [currentlySelectedAlbumId, setCurrentlySelectedAlbumId] = useState(0);

    let refresh = false;

    // Methods

    // Callback hook that initializes the component
    // - Note: this is where a call to web service API is typically placed.
    useEffect(() => {
        // Update the album list
        // - setAlbumList(albums);
        loadAlbums();
        //if external list is edited, this will make sure changes show up in browser.
    }, [refresh]);

    const loadAlbums = async () => {
        // Async/Await is non-blocking, 
        //  processes will continue to run while the data is being fetched.
        const response = await dataSource.get('/albums');

        setAlbumList(response.data);
    };

    /**
     * Get user search phrase.
     * @param {*} phrase 
     */
    const UpdateSearchResults = async (phrase) => {
        console.log('phrase is ' + phrase);
        setSearchPhrase(phrase);
    };

    /**
     * 
     * @param {*} id 
     * @param {*} navigate 
     */
    const updateSingleAlbum = (id, navigate, uri) => {
        console.log('Update Single Album = ', id);
        console.log('Update Single Album = ', navigate);
        
        var indexNumber = 0;
        for (var i = 0; i < albumList.length; i++) {
            if (albumList[i].id === id)
                indexNumber = i;
        }

        setCurrentlySelectedAlbumId(indexNumber);
        let path = uri + indexNumber
        console.log('path ', path);
        navigate(path);
    };

    /**
     * Create a new array of album Cards to display.
     * @returns A new array with each element being the result of the callback function.
     */
    console.log('albumList', albumList);
    const renderedList = albumList.filter((album) => {
        if (album.description.toLowerCase().includes(searchPhrase.toLocaleLowerCase()) || searchPhrase === '') 
            return true;
        
        return false;
    });
    console.log('renderedList', renderedList);

    // Route changed to use EditAlbum onEditAlbum.
    const onNewAlbum = async (navigate) => {
        navigate('/');
        loadAlbums();
    };

    const onEditAlbum = (navigate) => {
        loadAlbums();
        navigate('/');
    };

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path='/' element= {
                    <SearchAlbum
                        UpdateSearchResults= {UpdateSearchResults}
                        albumList= {renderedList}
                        updateSingleAlbum= {updateSingleAlbum}
                    /> 
                } />
                <Route exact path='/new' element= {
                    <EditAlbum  onEditAlbum={onEditAlbum}/>
                } />
                <Route exact path='/edit/:albumId' element={
                    <EditAlbum onEditAlbum={onEditAlbum} album={albumList[currentlySelectedAlbumId]} /> 
                }/>
                <Route exact path='/show/:albumId' element= {
                    <OneAlbum album= {albumList[currentlySelectedAlbumId]} />
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default App;