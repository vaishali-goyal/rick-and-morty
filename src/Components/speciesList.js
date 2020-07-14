import React from "react";
import { connect } from "react-redux";
import { fetchSpecies, filterSpecies } from "./speciesActions";

import SpeciesTiles from './Species/Species';
import TopFilters from './Filters/TopFilters';
import Filters from './Filters/Filters'

class SpeciesList extends React.Component {
  componentDidMount() {
    // this.props.dispatch(fetchSpecies());
    this.props.fetchSpecies();
  }

  render() {
    const { error, loading, species, filter } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-2">
            <div className="filters-wrapper">
              <Filters species={species} />
            </div>
          </div>
          <div className="col-sm-12 col-md-9 col-lg-10">
            <TopFilters />

            <div className="Species-wrapper">
              <SpeciesTiles species={species} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  species: state.species.items,
  loading: state.species.loading,
  error: state.species.error,
  filteredItem: state.species.items,
});


export const mapDispatchToProps = dispatch => ({
  fetchSpecies: () => dispatch(fetchSpecies()),
  setFilterData: (payload, items) =>
    dispatch(filterSpecies(payload, items))
});

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesList);