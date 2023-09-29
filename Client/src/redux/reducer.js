import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharsFav: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        /*   case ADD_FAV:
              return {
                  ...state,
                  myFavorites: [...state.allCharsFav, payload], //no se necesita spread de payload porque es un obj
                  allCharsFav: [...state.allCharsFav, payload]
              } */

        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharsFav: payload
            };

        /*      case REMOVE_FAV:
                 return {
                     ...state,
                     myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
                 } */

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharsFav: payload
            };

        case FILTER:
            const allCharactersFiltered = state.allCharsFav.filter(character => character.gender === payload)
            return {
                ...state,
                myFavorites:
                    payload === "allCharacters"
                        ? [...state.allCharsFav]
                        : allCharactersFiltered
            }

        case ORDER:
            const allCharsFavCopy = [...state.allCharsFav]
            return {
                ...state,
                myFavorites:
                    payload === "A"
                        ? allCharsFavCopy.sort((a, b) => a.id - b.id)
                        : allCharsFavCopy.sort((a, b) => b.id - a.id)
            }

        default:
            return { ...state }
    }
}

export default reducer;