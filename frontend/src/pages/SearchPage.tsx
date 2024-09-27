import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import IngredientsFilter from '../components/OffCanvas/Filter';
import IngredientCard from '../components/card/IngredientCard';

interface Recipe {
  id: number;
  title: string;
  description: string;
  img: string;
}

export type {Recipe}

type props = {
    searchTerm: string
    setSearchTerm: (searchTerm: string) => void
}

// Mock data for search results
const mockRecipes: Recipe[] = [
  { id: 1, title: 'Chocolate Chip Cookies', description: 'Classic homemade cookies', img: '' },
  { id: 2, title: 'Vegetable Stir Fry', description: 'Quick and healthy dinner option', img: '' },
  { id: 3, title: 'Banana Bread', description: 'Moist and delicious bread', img: '' },
  { id: 4, title: 'Chicken Alfredo', description: 'Creamy pasta dish', img: '' },
];

const SearchPage: React.FC<props> = ({searchTerm, setSearchTerm}: props) => {
  const [isFilterHidden, setIsFilterHidden] = useState(true);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Filter mock recipes based on search term
    
  };

  const toggleFilter = () => {
    setIsFilterHidden(!isFilterHidden);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <h1 className="text-center mb-4">Recipe Search</h1>
          <Form onSubmit={handleSearch}>
            <Form.Group className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="Search for recipes..." 
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit">
                Search
              </Button>
              <Button variant="secondary" onClick={toggleFilter}>
                {isFilterHidden ? 'Show Filters' : 'Hide Filters'}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <Row>
        {mockRecipes.map((recipe: Recipe) => (
          <IngredientCard key={recipe.id} Recipe={recipe} />
        ))}
      </Row>
      {mockRecipes.length === 0 && searchTerm && (
        <p className="text-center">No results found. Try a different search term.</p>
      )}
      <IngredientsFilter Hidden={isFilterHidden} toggle={toggleFilter}/>
    </Container>
  );
};

export default SearchPage;