import {
    FETCH_SPECIES_BEGIN,
    FETCH_SPECIES_SUCCESS,
    FETCH_SPECIES_FAILURE,
    SORT_SPECIES,
    FILTER_SPECIES,
    SEARCH_SPECIES
} from "./speciesActions";
//import { act } from "react-dom/test-utils";
  
const initialState = {
    items: [],
    loading: false,
    error: null,
    sortedItems: [],
    sortType: "",
    filteredItem: [],
    value: ''
};
  
export default function speciesReducer(
    state = initialState,
    action
) {
    switch (action.type) {
      case FETCH_SPECIES_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_SPECIES_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.species
        };
  
      case FETCH_SPECIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };

      case SORT_SPECIES: {
        return {
          ...state,
          loading: false,
          items: action.payload.species,
          sortType: action.payload.sortType
        }; 
      }

      case FILTER_SPECIES: {
        
        return {
          ...state,
          loading: false,
          filteredItem : action.payload.items,
          filter: action.payload.filter 
        };
      }

      case SEARCH_SPECIES: {
        // const { value } = action;
        // const filteredItem = state.items.filter((val) => val['name'].indexOf(value));
        // console.log(filteredItem);
        return {
          ...state,
          loading: false,
          value: action.payload,
          searchedItem: action.payload.species
        };
      } 
  
      default:
        return state;
    }
}
  