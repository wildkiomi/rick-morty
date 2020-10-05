import {
  FETCH_CHARACTERS,
  UPDATE_CHARACTERS,
  UPDATE_PAGE,
  FETCH_CHARACTER,
  UPDATE_CHARACTER,
} from "./actions";

const initialState = {
  characters: [],
  character: {},
  page: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return state;
    case UPDATE_CHARACTERS:
      return {
        ...state,
        characters: state.characters.concat(action.payload),
      };
    case FETCH_CHARACTER:
      return state;
    case UPDATE_CHARACTER:
      return {
        ...state,
        character: action.payload,
      };
    case UPDATE_PAGE:
      return { ...state, page: state.page + 1 };
    default:
      return initialState;
  }
};

export default reducer;
