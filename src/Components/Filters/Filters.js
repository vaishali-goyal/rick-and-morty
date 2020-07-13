import React from 'react';

//import './filters-style.css';

const Filters = (props) => {

        const uniqueSpecies = [...new Set( props.species.map(result => result.species)) ];
        const uniqueGender = [...new Set( props.species.map(result => result.gender)) ];
        const uniqueOrigin = [...new Set( props.species.map(result => result.origin.name)) ];

        /* const [Checked, setChecked] = useState([]);

        const handleToggle = (value) => {
            const currentIndex = Checked.indexOf(value);
            const newChecked = [...Checked];

            if(currentIndex === -1) {
                newChecked.push(value);
            }else {
                newChecked.splice(currentIndex, 1)
            }

            setChecked(newChecked);
            props.handleFilters(newChecked);
        } */

        return (
            <>
                <div className="filter-cat">
                    <h4>Species</h4>
                    {uniqueSpecies.map((result, index) => (    
                        <div key={index} className="form-group">
                            <div className="form-check">                
                                <input type="checkbox" value={result} className="form-check-input" id={result} />
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
                                <input type="checkbox" value={result} className="form-check-input" id={result} />
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
                                <input type="checkbox" value={result} className="form-check-input" id={result} />
                                <label className="form-check-label" htmlFor={result}>{result}</label>
                            </div>
                        </div>                            
                    ))}
                </div>
            </>
        );

}

export default Filters;