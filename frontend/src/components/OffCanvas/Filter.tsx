import React, { useState } from 'react';
import { Offcanvas, Form, Button, ListGroup } from 'react-bootstrap';

type Props = {
    Hidden: boolean;
    toggle: () => void;
    onFilterChange?: (includeIngredients: string[], excludeIngredients: string[]) => void;
    setFilters: () => void;
}

const IngredientsFilter: React.FC<Props> = ({ Hidden, toggle, onFilterChange, setFilters }: Props) => {
  const [includeIngredients, setIncludeIngredients] = useState<string[]>([]);
  const [excludeIngredients, setExcludeIngredients] = useState<string[]>([]);
  const [newIncludeIngredient, setNewIncludeIngredient] = useState('');
  const [newExcludeIngredient, setNewExcludeIngredient] = useState('');

  const handleAddInclude = (e: React.FormEvent) => {
    e.preventDefault();
    if (newIncludeIngredient && !includeIngredients.includes(newIncludeIngredient)) {
      const updatedIncludeIngredients = [...includeIngredients, newIncludeIngredient];
      setIncludeIngredients(updatedIncludeIngredients);
      setNewIncludeIngredient('');
      onFilterChange?.(updatedIncludeIngredients, excludeIngredients);
    }
  };

  const handleAddExclude = (e: React.FormEvent) => {
    e.preventDefault();
    if (newExcludeIngredient && !excludeIngredients.includes(newExcludeIngredient)) {
      const updatedExcludeIngredients = [...excludeIngredients, newExcludeIngredient];
      setExcludeIngredients(updatedExcludeIngredients);
      setNewExcludeIngredient('');
      onFilterChange?.(includeIngredients, updatedExcludeIngredients);
    }
  };

  const handleRemoveInclude = (ingredient: string) => {
    const updatedIncludeIngredients = includeIngredients.filter(item => item !== ingredient);
    setIncludeIngredients(updatedIncludeIngredients);
    onFilterChange?.(updatedIncludeIngredients, excludeIngredients);
  };

  const handleRemoveExclude = (ingredient: string) => {
    const updatedExcludeIngredients = excludeIngredients.filter(item => item !== ingredient);
    setExcludeIngredients(updatedExcludeIngredients);
    onFilterChange?.(includeIngredients, updatedExcludeIngredients);
  };

  return (
    <Offcanvas show={!Hidden} onHide={toggle} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Ingredient Filters</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <h5>Include Ingredients</h5>
        <Form className="mb-3" onSubmit={handleAddInclude}>
          <Form.Group className="d-flex">
            <Form.Control
              type="text"
              placeholder="Add ingredient..."
              value={newIncludeIngredient}
              onChange={(e) => setNewIncludeIngredient(e.target.value)}
            />
            <Button type="submit" variant="primary" className="ms-2">
              Add
            </Button>
          </Form.Group>
        </Form>
        <ListGroup className="mb-4">
          {includeIngredients.map((ingredient, index) => (
            <ListGroup.Item key={index} variant="dark" className="d-flex justify-content-between align-items-center">
              {ingredient}
              <Button variant="danger" size="sm" onClick={() => handleRemoveInclude(ingredient)}>
                Remove
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <h5>Exclude Ingredients</h5>
        <Form className="mb-3" onSubmit={handleAddExclude}>
          <Form.Group className="d-flex">
            <Form.Control
              type="text"
              placeholder="Add ingredient to exclude..."
              value={newExcludeIngredient}
              onChange={(e) => setNewExcludeIngredient(e.target.value)}
            />
            <Button type="submit" variant="primary" className="ms-2">
              Add
            </Button>
          </Form.Group>
        </Form>
        <ListGroup>
          {excludeIngredients.map((ingredient, index) => (
            <ListGroup.Item key={index} variant="dark" className="d-flex justify-content-between align-items-center">
              {ingredient}
              <Button variant="danger" size="sm" onClick={() => handleRemoveExclude(ingredient)}>
                Remove
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default IngredientsFilter;