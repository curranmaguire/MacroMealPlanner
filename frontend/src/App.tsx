import React from 'react';
import './App.css';

import CardList from './components/CardList/CardList';

function App() {
  return (
    <div className="App">
      <CardList />
    </div>
  );
}

export default App;


// for the main page we need:
//navbar with functionality to load other pages:
////// Recipe page (recommendations, search bar, saved)
////// Saved page (saved recipes)
////// Shopping List (ingredients from saved recipes, ability to edit due to items in fridge )
////// user page (profile, edit profile, current goals, tracker)