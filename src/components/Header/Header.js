import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = (props) => {

    return (
        <header>
            <div id="logo">
                <Link to="/" className="link">
                    <h1>
                        HYUNG WON <span>CHO</span>
                    </h1>
                </Link>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;