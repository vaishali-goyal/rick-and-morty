import React from 'react';

const SelectedFilter = (props) =>  {
      //console.log('Selected Filter' + props.list);
    return (
        <div className="selected-filters">
            {/* <ul>
                {props.list.map((item,index) => <li key={index}>{item.filter} <button id={item.filter} name={item.cat} className="btn btn-link p-0" onClick={props.updateFilter}>x</button></li>)}
            </ul> */}
        </div>
    )
}

export default SelectedFilter;