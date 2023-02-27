import React from 'react';

const IdCard = (props) => {
const { user: { lastName, firstName, gender, height, picture } } = props;

return (
    <div className="card">
        <div className="card-info">
            <img src={picture} alt=""/>
            <p className="info">First name:</p><p>{lastName}</p>
            <p className="info">Last name: </p><p>{firstName}</p>
            <p className="info">Gender: </p><p>{gender}</p>
            <p className="info">Height: </p><p>{height}m</p>
        </div>
    </div>
    )
}

export default IdCard;