import React from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import NavBar from './components/NavBar/NavBar';
import FormControl from 'react-bootstrap/esm/FormControl';
import UserPage from './pages/UserPage';
import RecipePage from './pages/RecipePage';
import ShoppingListPage from './pages/ShoppingListPage';


function App() {
  const [search, setSearch] = React.useState<string>("")
  const [page, setPage] = React.useState<number>(2)
  // page index: 0 = recipes, 1 = user, 2 = shopping list
    

    const onClick = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setPage(0)
      console.log(page)
    }
    const handleSearch = (e:any) => {
      e.preventDefault()
      setSearch(e.target.value)
    };
  if (page === 0) //// recipes
    {
    return (
      <div className="App">
        <NavBar setPage={setPage} onClick={onClick} handleSearch={handleSearch} search={search}/>
        <RecipePage />
      </div>
    )
  } else if (page === 1) //// user
    {
    return (
      <div className="App">
        <NavBar setPage={setPage} onClick={onClick} handleSearch={handleSearch} search={search}/>
        <UserPage />
      </div>
    )
  } else if (page === 2) //// shopping list
  {
    return (
      <div className="App">
        <NavBar setPage={setPage} onClick={onClick} handleSearch={handleSearch} search={search}/>
        <ShoppingListPage />
      </div>
    )
  }
  return (
    
    <div className="App">
        <NavBar setPage={setPage} onClick={onClick} handleSearch={handleSearch} search={search}/>


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