import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataSource from './dataSource';

const EditBook = (props) => {

    // Assume new Album is being created
    let book = {
        title: '',
        author: '',
        price: '',
        isbn13: '',
        description: ''
    };
    let newBookCreation = true;

    // if album is provided in props, then we are Editing an existing album
    //  else, we are creating a new album
    if (props.book) {
        book = props.book;
        newBookCreation = false;
    }

    const [bookTitle, setBookTitle] = useState(book.title || '');
    const [author, setAuthor] = useState(book.author || '');
    const [price, setPrice] = useState(book.price || '');
    const [isbn13, setIsbn13] = useState(book.isbn13 || '');
    const [description, setDescription] = useState(book.description || '');

    const navigate = useNavigate();

    const updateTitle = (event) => {
        setBookTitle(event.target.value);
    };
    const updateAuthor = (event) => {
        setAuthor(event.target.value);
    };
    const updateDescription = (event) => {
        setDescription(event.target.value);
    };
    const updatePrice = (event) => {
        setPrice(event.target.value);
    };
    const updateIsbn = (event) => {
        setIsbn13(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log("Submit");
        const editedBook = {
            bookId: book.bookId,
            title: bookTitle,
            author: author,
            description: description,
            price: price,
            isbn13: isbn13
        };

        console.log(editedBook);
        saveBook(editedBook);
    };

    const saveBook = async (book) => {
        let response;

        if (newBookCreation) {
            response = await dataSource.post('/books', book);
        }
        else {
            response = await dataSource.put('/books', book);
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
                <h1>{newBookCreation ? "Create New Book" : "Edit Existing Book"}</h1>
                <div className="form-group">
                    <label htmlFor="bookTitle">Title:</label>
                    <input type="text" 
                        className="form-control" 
                        id="bookTitle" 
                        placeholder="Enter Book Title" 
                        value={bookTitle}
                        onChange={updateTitle}
                    />
                    <label htmlFor="author">Author:</label>
                    <input type="text" 
                        className="form-control" 
                        id="author" 
                        placeholder="Enter Book Author" 
                        value={author}
                        onChange={updateAuthor}
                    />
                    <label htmlFor="price">Price:</label>
                    <input type="text" 
                        className="form-control" 
                        id="price" 
                        placeholder="Enter a Price for the Book" 
                        value={price}
                        onChange={updatePrice}
                    />
                    <label htmlFor="isbn13">ISBN-13:</label>
                    <input type="text" 
                        className="form-control" 
                        id="isbn13" 
                        placeholder="Enter ISBN-13 Identifier" 
                        value={isbn13}
                        onChange={updateIsbn}
                    />
                    <label htmlFor="description">Description:</label>
                    <input type="text" 
                        className="form-control" 
                        id="description" 
                        placeholder="Enter a brief description" 
                        value={description}
                        onChange={updateDescription}
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

export default EditBook;