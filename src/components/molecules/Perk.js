import React from 'react';

const Perk = (props) => (
    <div className="m-perk">
        <h4>{ props.name }</h4>
        <p>
            { props.description }
        </p>
    </div>
);

export default Perk;