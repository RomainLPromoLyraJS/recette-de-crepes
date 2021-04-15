// my Header component 

import crepes from '../logo/crepes.jpg';

const Header = () => (
   <div className= 'header'>
        <img class="header__img" src={crepes} alt="A lot of crepes with one rasperry on the top"/>
            <div>
                <h1 className="header__title">crêpes raffinées</h1>
                <p className="header__text">john deuf - facile</p>
            </div>
    </div>
)

export default Header;