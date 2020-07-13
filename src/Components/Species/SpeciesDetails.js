import React from 'react';

const SpeciesDetails = props => {
    return(
        <div className="species-list-wrapper">
            <ul>
                <li>
                    <span>Status</span>
                    <span className="align-right">{props.result.status}</span>
                </li>
                <li>
                    <span>Species</span>
                    <span className="align-right">{props.result.species}</span>
                </li>
                <li>
                    <span>Gender</span>
                    <span className="align-right">{props.result.gender}</span>
                </li>
                <li>
                    <span>Orgin</span>
                    <span className="align-right">{props.result.origin.name}</span>
                </li>
                <li>
                    <span>Last Location</span>
                    <span className="align-right">{props.result.location.name}</span>
                </li>
            </ul>
        </div>
    );
}

export default SpeciesDetails;