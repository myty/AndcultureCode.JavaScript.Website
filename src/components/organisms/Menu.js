import * as React from 'react';
import IconClose  from 'components/atoms/IconClose';
import Logo       from 'components/atoms/Logo';

const Menu = (props) => (
    <div className={`c-menu ${props.open ? "-open" : ""}`}>
        <div className="c-menu__overlay">
            <div className="o-rhythm__container -fluid">
                <div className="c-menu__overlay__logo">
                    <Logo />
                </div>
            </div>
        </div>
        <nav aria-label="Main menu links">
            <button onClick={props.onClose}><IconClose /></button>
            <a href="/">home</a>
            <a href="/blog">blog</a>
            <a href="/contact">contact</a>
        </nav>
    </div>
);

export default Menu;
