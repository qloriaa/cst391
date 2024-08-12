import React from 'react';
//import ReactDOM from 'react-dom';

const BookCard = (props) => {

    const handleButtonClick = (event, uri) => {
        console.log('ID clicked is ', props.bookId, 'uri:', uri);
        props.onClick(props.bookId, uri);
    };

    return (
        <div className="card" style={{width: '18rem'}}>
            <img src="https://picsum.photos/200" className="card-img-top" alt={`${props.bookTitle} cover`}/>
            <div className="card-body">
                <h5 className="card-title">{props.bookTitle}</h5>
                <p className="card-text">{props.bookDescription}</p>
                <button 
                    onClick={()=> handleButtonClick(props.bookId, '/show/')} 
                    className='btn btn-primary'>
                    {props.buttonText}
                </button>
                <button 
                    onClick={() => handleButtonClick(props.bookId, '/edit/')}
                    className='btn btn-secondary;'>
                    Edit
                </button>
            </div>
        </div>
    );
};

export default BookCard;