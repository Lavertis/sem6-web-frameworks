import React from 'react';

const Card = (props) => (
    <div>
        <h2>{props.name}</h2>
        <img src={props.img} alt="avatar_img"/>
        <p>{props.tel}</p>
        <p>{props.email}</p>
    </div>
);

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
