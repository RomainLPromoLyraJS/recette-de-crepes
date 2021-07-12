// == Package imports
import React from 'react';
import PropTypes from 'prop-types';

// import CSS file
import '../Recipe';


const Recipe = ({steps}) => {
    return (
        
        <div className="recipe">
        <ul className="recipe__list">
            {steps.map((step) => (
                <li key={step} className="recipe__list__element">{step}</li>
            ))}
            
        </ul>
        
        </div>
    );
};

Recipe.propTypes = {
steps: PropTypes.arrayOf (
    PropTypes.string.isRequired,
).isRequired,
}

export default Recipe;