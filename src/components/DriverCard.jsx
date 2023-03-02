import React from 'react';
import Rating from './Rating'

const DriverCard = (props) => {
    const { name, rating, img, car:{model, licensePlate} } = props;
    return (
    <section>
        <div className="image">
            <img src={img} alt={name}/>
        </div>
        <div className="file">
            <h2>{name}</h2>
            <Rating>{rating}</Rating>
            <p>{model} - {licensePlate}</p>
        </div>
    </section>
)
}

export default DriverCard;