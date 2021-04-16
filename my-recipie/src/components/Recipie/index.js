// == Package imports
import React from 'react';

// import CSS file
import '../Recipie';


const Recipie = () => {
    return (
        
        <div className="recipie">
        <ul className="recipie__list">
            <li className="recipie__list__element">tamiser farine</li>
            <li className="recipie__list__element">rajouter le sucre et le sel</li>
            <li className="recipie__list__element">rajouter les oeufs en mélangeant</li>
            <li className="recipie__list__element">rajouter le beurre fondu tout en mélengeant</li>
            <li className="recipie__list__element">rajouter le lait petit à petit en mélangeant</li>
            <li className="recipie__list__element">rajouter le rhum tout en mélengeant. A ce stade si vous fatiguez,
                n'hésitez pas à vous en servir un verre avant d'attaquer la suite.
            </li>
            <li className="recipie__list__element">laisser reposer une heure</li>
            <li className="recipie__list__element">faire cuire à la poêle ou à la machine à crêpes.</li>
            <li className="recipie__list__element">dégustez !</li>
        </ul>
        
        </div>
    );
};

export default Recipie;