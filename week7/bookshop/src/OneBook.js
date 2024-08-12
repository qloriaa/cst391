import React from 'react';
import { useNavigate } from 'react-router-dom';

const OneBook = (props) => {
    const navigate = useNavigate();
    
    const handleEditClick = () => {
        navigate(`/edit/${props.book.id}`);
    };
    const handleDeleteClick = () => {
        navigate(`/delete/${props.book.id}`);
    };

    return (
        <div className='container'>
            <h2>Book Details For {props.book.title}</h2>
            <div className='row'>
                <div className='col col-sm-5'>
                    <div className='card'>
                        <img src="https://picsum.photos/600"
                            className= 'card-img-top'
                            alt= {props.book.title}
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>{props.book.title}</h5>
                            <p className='card-text'>{props.book.description}</p>
                            <button onClick={handleDeleteClick} className='btn btn-secondary'>Delete</button>
                            <button onClick={handleEditClick} className='btn btn-primary'>Edit</button>
                        </div>
                    </div>

                </div>
                <div className='col col-sm-4'>
                    <label>Author: </label>
                    <div className='card'>
                        <p className='card-text'>{props.book.author}</p>
                    </div>
                    <label>Price: </label>
                    <div className='card'>
                        <p className='card-text'>$ {props.book.price}</p>
                    </div>
                    <label>ISBN-13: </label>
                    <div className='card'>
                        <p className='card-text'>{props.book.isbn13}</p>
                    </div> 
                    <label>Description: </label>
                    <div className='card'>
                        <p className='card-text'>{props.book.description}</p>
                    </div>      
                </div>
            </div>        
        </div>
    );
};

export default OneBook;