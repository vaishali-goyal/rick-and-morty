import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';
import { filterSpecies, fetchSpecies } from '../speciesActions'

const SearchComponent = (props) => {

  const onSubmit = e => {
    const { fetchSpecies, setFilterData, items, filter } = props;

    let filteredItem = filter.filter((val) => val['name'].toLowerCase().includes(search.toLowerCase()));

    setFilterData(filteredItem, filter);
  }



  const [search, setSearch] = useState('');
  const [searchedItems, setSearchedItems] = useState('');

  useEffect(() => {
    setSearchedItems(
      props.items.filter(item => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      })
    )
  }, [search, props.items])

  return (
    <div className="form-group">
      <label>Search by Name</label>
      <div className="row">
        <div className="col-8">
          <input type="text" name="searchInput" className="form-control"
            onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="col-4 pl-0">
          <input type="submit" className="btn btn-primary" onClick={(e) => onSubmit()} />
        </div>
      </div>
    </div>
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
  items: state.species.items,
  filter: state.species.filter
})


export const mapDispatchToProps = dispatch => ({
  fetchSpecies: () => dispatch(fetchSpecies()),
  setFilterData: (payload, items) =>
    dispatch(filterSpecies(payload, items))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);