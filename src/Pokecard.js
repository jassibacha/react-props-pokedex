import React from 'react';
import './Pokecard.css';

const Pokecard = (props) => {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
    return (
        <div className="Pokecard">
            <h5 className="Pokecard-Title">{props.name}</h5>
            <img className="Pokecard-Image" src={imageUrl} alt={props.name} />
            <ul className="Pokecard-Info">
                <li>Type: {props.type}</li>
                <li>EXP: {props.base_experience}</li>
            </ul>
        </div>
    );
};

export default Pokecard;
