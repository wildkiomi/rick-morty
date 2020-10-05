import React, { useCallback } from "react";
import './styles.scss';
import { useHistory } from "react-router-dom";

const Character = ({ 
    id,
    name, 
    image,
}) => {
    const history = useHistory();

    const handleClick = useCallback(() => {
        history.push(`/character/${id}`);
    }, [history, id]);

  return (
    <div className="character-container">
        <div className="character-container__image">
            <img src={image} alt={name} />
        </div>
        <div className="character-container__description">
            <h2>{name}</h2>
        </div>
        <div className="character-container__button">
            <button onClick={handleClick}>More...</button>
        </div>
    </div>
  );
};

export default Character;
