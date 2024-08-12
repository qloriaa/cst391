import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataSource from './dataSource';

const NewBook = (props) => {

    const [bookTitle, setBookTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [isbn13, setIsbn13] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    const updateTitle = (event) => {
        setBookTitle(event.target.value);
    };
    const updateAuthor = (event) => {
        setAuthor(event.target.value);
    };
    const updatePrice = (event) => {
        setPrice(event.target.value);
    };
    const updateIsbn = (event) => {
        setIsbn13(event.target.value);
    };
    const updateDescription = (event) => {
        setDescription(event.target.value);
    };
    

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log("Submit");
        const book = {
            title: bookTitle,
            author: author,
            price: price,
            isbn13: isbn13,
            description: description,
        };

        console.log(book);
        saveBook(book);
    };

    const saveBook = async (book) => {
        const response = await dataSource.post('/books', book);

        console.log(response);
        console.log(response.data);
        props.onNewBook(navigate);
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
                <h1>Create New Book</h1>
                <div className="form-group">
                    <label htmlFor="bookTitle">Book Title:</label>
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
                        placeholder="Enter Author" 
                        value={author}
                        onChange={updateAuthor}
                    />
                    <label htmlFor="price">Price:</label>
                    <input type="text" 
                        className="form-control" 
                        id="price" 
                        placeholder="Enter a price" 
                        value={price}
                        onChange={updatePrice}
                    />
                    <label htmlFor="isbn13">ISBN-13:</label>
                    <input type="text" 
                        className="form-control" 
                        id="isbn13" 
                        placeholder="Enter ISBN-13 identifier" 
                        value={isbn13}
                        onChange={updateIsbn}
                    />
                    <label htmlFor="description">Description:</label>
                    <input type="text" 
                        className="form-control" 
                        id="description" 
                        placeholder="Enter a Description" 
                        value={description}
                        onChange={updateDescription}
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

export default NewBook;