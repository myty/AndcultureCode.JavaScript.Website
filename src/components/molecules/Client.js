import React from 'react';

const Client = (props) => (
    <img
        alt={props.logo.description}
        src={props.logo.image.childImageSharp.fluid.src} />
);

export default Client;