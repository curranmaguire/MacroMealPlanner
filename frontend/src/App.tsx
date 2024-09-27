import React from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import NavBar from './components/NavBar/NavBar';
import FormControl from 'react-bootstrap/esm/FormControl';
import UserPage from './pages/UserPage';
import RecipePage from './pages/RecipePage';
import ShoppingListPage from './pages/ShoppingListPage';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer/Footer';
import Search from './components/Search/search';
import SearchPage from './pages/SearchPage';


function App() {
  const [search, setSearch] = React.useState<string>("")
  const [page, setPage] = React.useState<number>(0)
  // page index: 0 = Landing, 1 = user, 2 = shopping list, 3 = recipe, 4 = search
    

    const onClick = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      ////set the page to the search and then use handle search to feed the search into search page
      setPage(4)

    }
    const handleSearch = (e:any) => {
      e.preventDefault()
      setSearch(e.target.value)
    };

    function handlePage(page: number) {
    switch(page){
      case 0:
        return  <LandingPage />
      case 1:
        return <UserPage />
      case 2:
        return <ShoppingListPage />
      case 3:
        return <RecipePage />
      case 4:
        return <SearchPage searchTerm={search} setSearchTerm={setSearch}/>
      default:
        return <LandingPage />
      
    }}
    return (
      <div className="App">
        <NavBar setPage={setPage} onClick={onClick} handleSearch={handleSearch} search={search}/>
        {handlePage(page)}
        <Footer />
      </div>
    )
    
  }


export default App;


// for the main page we need:
//navbar with functionality to load other pages:
////// Recipe page (recommendations, search bar, saved)
////// Saved page (saved recipes)
////// Shopping List (ingredients from saved recipes, ability to edit due to items in fridge )
////// user page (profile, edit profile, current goals, tracker)