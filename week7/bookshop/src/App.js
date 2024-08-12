import React, { useState, useEffect } from 'react';
// BrowserRouter: The wrapper component for router components.
// Routes: The immediate parent component of an individual Route.
// Route: Defines an individual Route in the application.
import { Route, Routes, BrowserRouter } from 'react-router-dom';
//import { createMemoryHistory } from 'history';

import dataSource from './dataSource';
//import hardcodeData from './sample-data.json';
import './App.css';

import SearchBook from './SearchBook';
import NavBar from './NavBar';
import OneBook from './OneBook';
import EditBook from './EditBook';

const App = (props) => {
    // Hook for Album List
    const [bookList, setBookList] = useState ([]);
    const [searchPhrase, setSearchPhrase] = useState ('');
    const [selectedBookId, setSelectedBookId] = useState(0);

    let refresh = false;

    // Methods

    // Callback hook that initializes the component
    // - Note: this is where a call to web service API is typically placed.
    useEffect(() => {
        // Update 
        setLibrary();
        //if external list is edited, this will make sure changes show up in browser.
    }, [refresh]);

    const setLibrary = async () => {
        // Async/Await is non-blocking, 
        //  processes will continue to run while the data is being fetched.
        const response = await dataSource.get('/books');

        setBookList(response.data);
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
    const updateBook = (id, navigate, uri) => {
        console.log('Update Book = ', id);
        console.log('Update Book = ', navigate);
        
        var indexNumber = 0;
        for (var i = 0; i < bookList.length; i++) {
            if (bookList[i].id === id)
                indexNumber = i;
        }

        setSelectedBookId(indexNumber);
        let path = uri + indexNumber
        console.log('path ', path);
        navigate(path);
    };

    /**
     * Create a new array of album Cards to display.
     * @returns A new array with each element being the result of the callback function.
     */
    console.log('bookList', bookList);
    const loadLibrary = bookList.filter((book) => {
        if (book.description.toLowerCase().includes(searchPhrase.toLocaleLowerCase()) || searchPhrase === '') 
            return true;
        
        return false;
    });
    console.log('loadLibrary', loadLibrary);
    

    // Route changed to use EditAlbum onEditAlbum.
    const onEditBook = (navigate) => {
        loadLibrary();
        navigate('/');
    };

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path='/' element= {
                    <SearchBook
                        UpdateSearchResults= {UpdateSearchResults}
                        bookList= {loadLibrary}
                        updateBook= {updateBook}
                    /> 
                } />
                <Route exact path='/new' element= {
                    <EditBook  onEditBook={onEditBook}/>
                } />
                <Route exact path='/edit/:bookId' element={
                    <EditBook onEditBook={onEditBook} album={bookList[selectedBookId]} /> 
                }/>
                <Route exact path='/show/:bookId' element= {
                    <OneBook book= {bookList[selectedBookId]} />
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default App;