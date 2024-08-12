import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookCard from './BookCard';

const BookList = (props) => {

    const handleSelectionOne = (bookId, uri) => {
        console.log('Selected ID is ' + bookId);
        props.onClick(bookId, navigator, uri);
    };

    console.log('props bookList', props);
    const navigator = useNavigate();

    const books = props.bookList.map((book) => {
        return (
            <BookCard   
                key= {book.id}
                bookId= {book.id}
                bookTitle= {book.title}
                author= {book.author}
                price= {book.price}
                isbn13= {book.isbn13}
                description= {book.description}
                buttonText= 'View'
                onClick= {handleSelectionOne}
            />
        );
    });

    return <div className='container'>{books}</div>
};

export default BookList;