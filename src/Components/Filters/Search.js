import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchSpecies } from '../speciesActions'

const SearchComponent = (props) => {

  // onChange = e => {
  //   this.props.search = e.target.value ;
  // }

  // onSubmit = e => {
  //   e.preventDefault();
  //   this.props.searchSpecies(this.props.items, this.props.search);
  // }

const [search, setSearch] = useState('');
const [searchedItems, setSearchedItems] = useState('');

useEffect(() => {
  setSearchedItems(
    props.items.filter(item => {
      return item.name.toLowerCase().includes( search.toLowerCase() );
    })
  )
}, [search, props.items])
    
  return (
    <form>
      <div className="form-group">
        <label>Search by Name</label>
        <div className="row">
          <div className="col-8">
            <input type="text" name="searchInput" className="form-control" 
              onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className="col-4 pl-0">
            <input type="submit" className="btn btn-primary" />
          </div>
        </div>
      </div>
    </form>
  )
}

// function mapStateToProps({filteredItem}) {
//   return {value: filteredItem};
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({searchSpecies}, dispatch);
// }

const mapStateToProps = state => ({
  search: state.species.search,
  items: state.species.items
})

export default connect(mapStateToProps, {searchSpecies})(SearchComponent);