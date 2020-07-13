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
    search: ''
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
        let sortedItems = [];
        if (action.payload.sortType === "asc") {
          sortedItems = [...state.items].sort((a, b) => a.id - b.id);
        } else if ((action.value = "des")) {
          sortedItems = [...state.items].sort((a, b) => b.id - a.id);
        }
        return {
          ...state,
          loading: false,
          items: sortedItems,
          sortType: action.payload.sortType
        };
      }

      case FILTER_SPECIES: {
        
        return {
          ...state,
          loading: false,
          items : action.payload.items,
          filter: action.payload.filter 
        };
      }

      case SEARCH_SPECIES: {
        //const { value } = action;
        let filteredItem =[];
        console.log("searcg");
        filteredItem = state.items.filter((val) => val['name'].indexOf(action.payload.search));
        console.log(filteredItem);
        return {
          ...state,
          loading: false,
          search: action.payload.search,
          items: filteredItem
        };
      } 
  
      default:
        return state;
    }
}
  