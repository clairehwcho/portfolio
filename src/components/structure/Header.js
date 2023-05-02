import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from '../nav/MainMenu';

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
            <MainMenu />
        </header>
    );
};

export default Header;