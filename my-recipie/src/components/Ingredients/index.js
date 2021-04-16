// == Package imports
import React from 'react';

// import CSS file
import '../Ingredients';

const Ingredients = () => {
    return (
        <div className="ingredients">
            <div className= "ingredients__instructions">
                <p><span className="ingredients__instructions__span">375 g</span> de farine tamisée</p>
            </div>
            <div className= "ingredients__instructions">
                <p><span className="ingredients__instructions__span">3 pincées</span> de sel</p>
            </div>
            <div className= "ingredients__instructions">
                <p><span className="ingredients__instructions__span">50 g</span> de sucre en poudre</p>
            </div>
            <div className= "ingredients__instructions">
                <p><span className="ingredients__instructions__span">6</span> oeufs entiers</p>
            </div>
            <div className= "ingredients__instructions">
                <p><span className="ingredients__instructions__span">80 g</span> de beurre fondu</p>
            </div>
            <div className= "ingredients__instructions">
                <p><span className="ingredients__instructions__span">1 L</span> de lait</p>
            </div>
            <div className= "ingredients__instructions">
                <p><span className="ingredients__instructions__span">3 cuillerées à soupe</span> de rhum ambré ou vieux</p>
            </div>
        </div>
    );
};

export default Ingredients;