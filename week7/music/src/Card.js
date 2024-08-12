import React from 'react';
//import ReactDOM from 'react-dom';

const Card = (props) => {

    const handleButtonCLick = (event, uri) => {
        console.log('ID clicked is ', props.albumId, 'uri:', uri);
        props.onClick(props.albumId, uri);
    };

    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={props.imageUrl} className="card-img-top" alt={`${props.albumTitle} cover`}/>
            <div className="card-body">
                <h5 className="card-title">{props.albumTitle}</h5>
                <p className="card-text">{props.albumDescription}</p>
                <button style={{margin: 5}} onClick={ () => handleButtonCLick(props.albumId, '/show/')} 
                    className='btn btn-primary'>
                    {props.buttonText}
                </button>
                <button onClick={() => handleButtonCLick(props.albumId, '/edit/')}
                    className='btn btn-secondary;'>
                    Edit
                </button>
            </div>
        </div>
    );
};

export default Card;