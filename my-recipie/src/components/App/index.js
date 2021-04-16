// == Package imports 
import React from 'react';

// LOCALS IMPORTS
import Header from '../Header'; 
import Ingredients from '../Ingredients';
import Recipie from '../Recipie';



// CSS IMPORTS
import './_app.scss';


function App() {
  return (
    <div className="app">
     <Header/>
    <Ingredients />
    <Recipie />
     
     
    </div>
  );
}

export default App;
