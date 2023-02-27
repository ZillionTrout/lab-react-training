import React from 'react';

const CreditCard = (props) => {
    const {card: {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}} = props;

const cardColor = {
    backgroundColor: `${bgColor}`,
    color: `${color}`
};

const showNumbers = () => {
    const lastDigits = number.substr(-4);
    return `**** **** **** ${lastDigits}`;
};

return (
    <section className="credit-card-section" style={cardColor}>
        <div className="bank-logo">
            <p>{type}</p>
        </div>
        <div className="number">{showNumbers()}</div>
        <div className="expires">
            <p><span>Expires </span> {expirationMonth}/{expirationYear}</p>
            <p> {bank}</p>
        </div>
        <div className="owner">
            <p>{owner}</p>
        </div>
    </section>
)
}

export default CreditCard;