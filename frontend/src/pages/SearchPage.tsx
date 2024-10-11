import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import IngredientsFilter from '../components/OffCanvas/Filter';
import IngredientCard from '../components/card/IngredientCard';

export interface Recipe {
  id: number;
  title: string;
  description: string;
  img: string;
}

interface FilterObject {
  searchTerm: string;
  matchedRecipes: Recipe[];
  unmatchedRecipes: Recipe[];
}

// Mock data for search results
const mockRecipes: Recipe[] = [
  { id: 1, title: 'Chocolate Chip Cookies', description: 'Classic homemade cookies', img: '' },
  { id: 2, title: 'Vegetable Stir Fry', description: 'Quick and healthy dinner option', img: '' },
  { id: 3, title: 'Banana Bread', description: 'Moist and delicious bread', img: '' },
  { id: 4, title: 'Chicken Alfredo', description: 'Creamy pasta dish', img: '' },
];

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('query') || '');
  const [isFilterHidden, setIsFilterHidden] = useState(true);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(mockRecipes);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearchTerm(query);
      filterRecipes(query);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ query: searchTerm });
    filterRecipes(searchTerm);
  };

  const filterRecipes = (query: string) => {
    const matched = mockRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(query.toLowerCase()) ||
      recipe.description.toLowerCase().includes(query.toLowerCase())
    );
    
    const unmatched = mockRecipes.filter(recipe => !matched.includes(recipe));
    
    const filterObject: FilterObject = {
      searchTerm: query,
      matchedRecipes: matched,
      unmatchedRecipes: unmatched
    };
    
    console.log('Filter Object:', filterObject);
    
    setFilteredRecipes(matched);
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
        {filteredRecipes.map((recipe: Recipe) => (
          <IngredientCard key={recipe.id} Recipe={recipe} />
        ))}
      </Row>
      {filteredRecipes.length === 0 && searchTerm && (
        <p className="text-center">No results found. Try a different search term.</p>
      )}
      <IngredientsFilter Hidden={isFilterHidden} toggle={toggleFilter}/>
    </Container>
  );
};

export default SearchPage;