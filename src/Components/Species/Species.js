import React from 'react';
import SpeciesDetails from './SpeciesDetails';

//import './species-style.css';

const SpeciesTiles = props => {    
    return(
        <div className="row">
            {
                props.species.map((result, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-3">
                        <div className="species-tiles">
                            <div className="species-image-wrapper">
                                <img src={result.image} alt={result.name} />
                                <div className="species-details">
                                    <h3>{result.name}</h3>
                                    <span>{result.created}</span>
                                </div>
                            </div>
                            <SpeciesDetails result={result} />
                        </div>
                    </div> 
                ))
            }
        </div>     
    );
}

export default SpeciesTiles;