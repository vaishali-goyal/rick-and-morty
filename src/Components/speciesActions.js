import { bindActionCreators } from "redux";

function getSpecies() {
    return fetch("https://rickandmortyapi.com/api/character/")
        .then(handleErrors)
        .then(res => res.json());
}

export function fetchSpecies() {
    return dispatch => {
        dispatch(fetchSpeciesBegin());
        return getSpecies()
        .then(json => {
            dispatch(fetchSpeciesSuccess(json.results));
            return json.species;
        })
        .catch(error =>
            dispatch(fetchSpeciesFailure(error))
        );
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const FETCH_SPECIES_BEGIN = "FETCH_SPECIES_BEGIN";
export const FETCH_SPECIES_SUCCESS = "FETCH_SPECIES_SUCCESS";
export const FETCH_SPECIES_FAILURE = "FETCH_SPECIES_FAILURE";
export const SORT_SPECIES = "SORT_SPECIES";
export const FILTER_SPECIES = "FILTER_SPECIES";
export const SEARCH_SPECIES = "SEARCH_SPECIES";

export const fetchSpeciesBegin = () => ({
    type: FETCH_SPECIES_BEGIN
});

export const fetchSpeciesSuccess = species => ({
    type: FETCH_SPECIES_SUCCESS,
    payload: { species }
});

export const fetchSpeciesFailure = error => ({
    type: FETCH_SPECIES_FAILURE,
    payload: { error }
});

// export const sortSpecies = (species, sortType) => ({
//     type: SORT_SPECIES,
//     payload: {
//         sortType: sortType,
//         items: sortType = "" ? species.sort((a,b) => a.id - b.id) : sortType = "asc" ? species.sort((a,b) => a.id - b.id) : sortType = "des" ? species.sort((a,b) => b.id - a.id) : species
//     }
// });

export const sortSpecies = (species, sortType) => (dispatch) => {
    return dispatch({
        type: SORT_SPECIES,
        payload: {
            sortType: sortType,
            species: species
        }
    })
}

export const filterSpecies = (species, filter, filterType) => ({
    type: FILTER_SPECIES,
    payload: { 
        filter: filter,
        species: species
        // filterType: filterType,
        // items: filter === "" ? species: species.filter(a => a.filterType.indexOf(filter) >= 0) 
    }
});

export const searchSpecies = (species, search) => (dispatch) => ({
    type: SEARCH_SPECIES,
    payload: {
        search,
        species
    }
});