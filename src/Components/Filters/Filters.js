import React, { useState } from 'react';
import { connect } from 'react-redux';

//import './filters-style.css';

import { filterSpecies } from '../speciesActions'

const Filters = (props) => {
    let uniqueSpecies = [];
    let uniqueGender = [];
    let uniqueOrigin = [];
    // console.log('Filters', props.species);
    if (props.species) {
        uniqueSpecies = [...new Set(props.species.map(result => result.species))];
        uniqueGender = [...new Set(props.species.map(result => result.gender))];
        uniqueOrigin = [...new Set(props.species.map(result => result.origin.name))];
    }

    const [Checked, setChecked] = useState([]);
    const [Filters, setFilters] = useState({
        results: []
    });

    const handleToggle = (e) => {
        const currentIndex = Checked.indexOf(e.target.value);
        const newChecked = [...Checked];

        if (currentIndex === -1) {
            newChecked.push(e.target.value);
            let filter = e.target.value;
            let result = props.species.filter((row) => {
                return row.species.includes(filter) || row.gender.includes(filter) || row.origin.name.includes(filter)
            });
            props.setFilterData(result);
        } else {
            console.log("uncheck" + newChecked);
            newChecked.splice(currentIndex, 1);
            
            let result = props.species.filter((row) => {
                return row.species !== newChecked || row.gender !== newChecked || row.origin.name !== newChecked
            });
            console.log(result);
            props.setFilterData(result);
        }

        setChecked(newChecked);
        //handleFilters(newChecked);
        
        //updateFilter(e.target.value);
    }

    // const handleFilters = (filters, category) => {
    //     console.log(filters);

    //     const newFilters = {...Filters};

    //     newFilters[category] = filters;

    //     showFilteredResults(newFilters);
    //     setFilters(newFilters);
    // }

    // const showFilteredResults = (filters) => {
    //     console.log(filters);
    //     const variables = {
    //         filters: filters
    //     };
    //     //getResults(variables);
    // }


    // const updateFilter = (value) => {
    //     //let cat = e.target.value.toLowerCase();

    //     let filter = value;
    //     let result = props.species.filter((row) => {
    //         return row.species.includes(filter) || row.gender.includes(filter) || row.origin.name.includes(filter)
    //     });
    //     props.setFilterData(result);
        // console.log(result);
        //return this.props.filterSpecies(result, value);

        // this.setState({ results: result });
        //  console.log('filteer');
        //let categoryNew = { ...props.species[cat] };
        // console.log('new cat ' + categoryNew)
        //categoryNew[filter] = e.target.checked;
        //let obj = {};
        //obj[cat] = categoryNew;
        //console.log('Obj ' + obj);
        // this.setState(obj,this.updateList);  
    //};

    return (
        <>
            <div className="filter-cat">
                <h4>Species</h4>
                {uniqueSpecies.map((result, index) => (
                    <div key={index} className="form-group">
                        <div className="form-check">
                            <input type="checkbox" value={result} className="form-check-input" id={result} onChange={handleToggle} />
                            <label className="form-check-label" htmlFor={result}>{result}</label>
                        </div>
                    </div>
                ))}
            </div>
            <div className="filter-cat">
                <h4>Gender</h4>
                {uniqueGender.map((result, index) => (
                    <div key={index} className="form-group">
                        <div className="form-check">
                            <input type="checkbox" value={result} className="form-check-input" id={result} onChange={handleToggle} />
                            <label className="form-check-label" htmlFor={result}>{result}</label>
                        </div>
                    </div>
                ))}
            </div>
            <div className="filter-cat">
                <h4>Origin</h4>
                {uniqueOrigin.map((result, index) => (
                    <div key={index} className="form-group">
                        <div className="form-check">
                            <input type="checkbox" value={result} className="form-check-input" id={result} onChange={handleToggle} />
                            <label className="form-check-label" htmlFor={result}>{result}</label>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

}

const mapStateToProps = state => ({
    items: state.species.result,
    filter: state.species.filter
})


export const mapDispatchToProps = dispatch => ({
    setFilterData: payload =>
        dispatch(filterSpecies(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);