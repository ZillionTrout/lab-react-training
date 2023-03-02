import React from "react";

const Rating = (prop) => {
    const { children } = prop;

    const ratingStarsFunction = (ratingOrStars) => {
        let number = Math.round(ratingOrStars);
        let paintingStars = [];
        for (let i = 0; i < 5; i++) {
            i < number ? paintingStars.push("★") : paintingStars.push("☆");
        };
        return paintingStars;
    };

    const paintingStars = ratingStarsFunction(children);
        return (
            <h2>{paintingStars}</h2>
        )
}

export default Rating;