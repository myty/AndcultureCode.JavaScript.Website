import * as React from 'react';
import IconClose  from 'components/atoms/IconClose';

const Menu = (props) => (
    <div className={`c-menu ${props.open ? "-open" : ""}`}>
        <div className="c-menu__overlay"></div>
        <nav>
            <button onClick={props.onClose}><IconClose /></button>
            <a href="/">home</a>
            <a href="/blog">blog</a>
            <a href="/contact">contact</a>
        </nav>
    </div>
);

export default Menu;
