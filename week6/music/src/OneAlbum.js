import React from 'react';

const OneAlbum = (props) => {

    return (
        <div className='container'>
            <h2>Album Details For {props.album.title}</h2>
            <div className='row'>
                <div className='col col-cm-3'>
                    <div className='card'>
                        <img src= {props.album.image}
                            className= 'card-img-top'
                            alt= {props.album.title}
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>{props.album.title}</h5>
                            <p className='card-text'>{props.album.description}</p>
                            <div className='list-group'>
                                <li>Show album tracks here...</li>
                            </div>
                            <a href='/#' className='btn btn-primary'>Edit</a>
                        </div>
                    </div>
                </div>
                <div className='col col-cm-9'>
                    <div className='card'>
                        <p>Show the lyrics of the selected track here..</p>
                    </div>
                    <div className='card'>
                        <p>Show the YouTube Video of selected track here..</p>
                    </div>
                </div>
            </div>        
        </div>
    );
};

export default OneAlbum;