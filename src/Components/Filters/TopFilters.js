import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortSpecies } from '../speciesActions'

//import './filters-style.css';
import SearchComponent from './Search';
import SelectedFilter from './SelectedFilters';

class TopFilters extends Component {
    render() {
        return (
            <div className="top-filters-wrapper">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Selected Filters</h3>
                        <SelectedFilter />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 sorting-filter">                      
                        <SearchComponent />
                        <select className="form-select" value={this.props.sortType} onChange={(e) => {console.log(this.props); this.props.sortSpecies(this.props.items, e.target.value)}}> 
                            <option>Sort by ID</option>
                            <option value="asc">Ascending</option>
                            <option value="des">Descending</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

// function mapStateToProps({sortedItems}) {
//     return {sortType: sortedItems};
//   }
  
//   function mapDispatchToProps(dispatch) {
//     return bindActionCreators({sortSpecies}, dispatch);
//   }


const mapStateToProps = state => ({
    items: state.species.items,
    sortType: state.species.sortType 
})
  
  export default connect(mapStateToProps, {sortSpecies})(TopFilters);