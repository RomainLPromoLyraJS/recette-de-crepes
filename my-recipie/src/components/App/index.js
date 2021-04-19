// == Package imports 
import React from 'react';

// LOCALS IMPORTS
import Header from '../Header'; 
import Ingredients from '../Ingredients';
import Recipe from '../Recipe';

// Static data imports
import recipe from '../../data/recipe';



// CSS IMPORTS
import './_app.scss';


function App() {
  return (
    <div className="app">
     <Header 
     title={recipe.title} 
     author={recipe.author}   
     difficulty={recipe.difficulty}
     picture={recipe.thumbnail}/>
    <Ingredients />
    <Recipe steps={recipe.instructions} />
     
     
    </div>
  );
}

export default App;
