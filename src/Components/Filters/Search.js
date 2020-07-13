import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchSpecies } from '../speciesActions'

class SearchComponent extends React.Component  {

  onChange = e => {
    this.props.searchSpecies(e.target.value);
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.props);
  }

  render(){
    //const { searchSpecies, value } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Search by Name</label>
          <div className="row">
            <div className="col-8">
              <input type="text" name="searchInput"  className="form-control" 
                onChange={this.onChange} />
            </div>
            <div className="col-4 pl-0">
              <input type="submit" className="btn btn-primary" />
            </div>
          </div>
        </div>
      </form>
    )
  }
}

// function mapStateToProps({filteredItem}) {
//   return {value: filteredItem};
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({searchSpecies}, dispatch);
// }

const mapStateToProps = state => ({
  value: state.species.value,
  searchedItem: state.species
})

export default connect(mapStateToProps, {searchSpecies})(SearchComponent);