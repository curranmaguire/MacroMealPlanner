import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import UserPage from './pages/UserPage';
import RecipePage from './pages/RecipePage';
import ShoppingListPage from './pages/ShoppingListPage';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer/Footer';
import SearchPage from './pages/SearchPage';

function App() {
  const [search, setSearch] = React.useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Router>
      <div className="App bg-dark text-light">
        <NavBar handleSearch={handleSearch} search={search} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/shopping-list" element={<ShoppingListPage />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// for the main page we need:
//navbar with functionality to load other pages:
////// Recipe page (recommendations, search bar, saved)
////// Saved page (saved recipes)
////// Shopping List (ingredients from saved recipes, ability to edit due to items in fridge )
////// user page (profile, edit profile, current goals, tracker)