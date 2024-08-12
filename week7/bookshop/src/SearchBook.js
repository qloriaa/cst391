import React from 'react';
import SearchForm from './SearchForm';
import BookList from './BookList';

const SearchBook = (props) => {

    console.log('props with update single album ', props);

    return (
        <div className='container'>
            <SearchForm onSubmit={props.updateSearchResults} />
            <BookList bookList={props.bookList} onClick= {props.updateBook} />
        </div>
    );
};

export default SearchBook;