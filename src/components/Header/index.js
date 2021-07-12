// == Package imports
import React from 'react';
import PropTypes from 'prop-types';

// import CSS file
import '../Header';

// import image 
// import crepes from '../../assets/logo/crepes.jpg'; -> old static picture

const Header = ({ title, author, difficulty, picture }) => (
    <div className= "header">
        <img className="header__img" src={picture} alt="Délicieuses crêpes à la pâte à tartiner"/>
            <div className="header__text">
                <h1 className="header__text__title">{title}</h1>
                <p className="header__text__level">{author} - {difficulty}</p>
            </div>
    </div>
)

Header.propTypes = {
title: PropTypes.string.isRequired,
author: PropTypes.string.isRequired,
difficulty: PropTypes.string.isRequired,
picture: PropTypes.string.isRequired,
};

export default Header;