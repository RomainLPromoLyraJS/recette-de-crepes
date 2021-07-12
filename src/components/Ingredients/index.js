// == Package imports
import React from 'react';
import PropTypes from 'prop-types';


// import CSS file
import '../Ingredients';

const Ingredients = ({ ingredients }) => ( 
    
        <div className="ingredients">
            <ul className= "ingredients__instructions">
                {ingredients.map(({ id, quantity, unit, name }) => (
                    <li key={id}><span className="ingredients__instructions__span">{`${quantity} ${unit}`}</span> {name}</li>
                ))}
                
            </ul>
        </div>
);

Ingredients.propTypes = {
    ingredients: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            quantity: PropTypes.string.isRequired,
            unit: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,

        }).isRequired,
    )
}


export default Ingredients;