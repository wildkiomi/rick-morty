import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacter } from 'store/actions';
import './styles.scss';

const ExtendedCharacter = ({ match }) => {
    const { params: { id } } = match;

    const dispatch = useDispatch();
    const { name, status, species, gender, image, created} = useSelector((state) => state.character);

    useEffect(() => {
        dispatch(fetchCharacter(id));
    }, [dispatch, id]);

    return(
        <div className="main-container">
            <img src={image} alt={name} />
            <div className="main-container__description">
                <strong>Name</strong><p>{name}</p>
                <strong>Status</strong><p>{status}</p>
                <strong>Species</strong><p>{species}</p>
                <strong>Gender</strong><p>{gender}</p>
                <strong>Created</strong><p>{created}</p>
            </div>
        </div>
    );
};

export default ExtendedCharacter;