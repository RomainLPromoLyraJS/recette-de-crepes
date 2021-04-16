// == Package imports
import React from 'react';

// import CSS file
import '../Header';

// import image 
import crepes from '../../assets/logo/crepes.jpg';

const Header = () => (
    <div className= "header">
        <img className="header__img" src={crepes} alt="A lot of crepes with one rasperry on the top"/>
            <div className="header__text">
                <h1 className="header__text__title">crêpes raffinées</h1>
                <p className="header__text__level">john deuf - facile</p>
            </div>
    </div>
)

export default Header;