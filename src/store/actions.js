export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS';
export const UPDATE_PAGE = 'UPDATE_PAGE';
export const FETCH_CHARACTER = 'FETCH_CHARACTER';
export const UPDATE_CHARACTER = 'UPDATE_CHARACTER';

export const fetchCharacters = () => ({
    type: FETCH_CHARACTERS,
});

export const updateCharacters = (characters) => ({
    type: UPDATE_CHARACTERS,
    payload: characters,
});

export const updatePage = () => ({
    type: UPDATE_PAGE,
});

export const fetchCharacter = (id) => ({
    type: FETCH_CHARACTER,
    payload: id,
});

export const updateCharacter = (character) => ({
    type: UPDATE_CHARACTER,
    payload: character,
});