import React from 'react';
import { Offcanvas, Form, Button, ListGroup } from 'react-bootstrap';

type props = {
    Hidden: boolean
    toggle: () => void
}
const IngredientsFilter: React.FC<props> = ({Hidden, toggle}:props) => {
  return (
    <Offcanvas show={!Hidden} onHide={() => {}} placement="end">
      <Offcanvas.Header closeButton onClick={toggle}>
        <Offcanvas.Title>Ingredient Filters</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <h5>Include Ingredients</h5>
        <Form className="mb-3">
          <Form.Group className="d-flex">
            <Form.Control
              type="text"
              placeholder="Add ingredient..."
            />
            <Button type="submit" variant="primary" className="ms-2">
              Add
            </Button>
          </Form.Group>
        </Form>
        <ListGroup className="mb-4">
          <ListGroup.Item variant="dark" className="d-flex justify-content-between align-items-center">
            Sample Ingredient
            <Button variant="danger" size="sm">
              Remove
            </Button>
          </ListGroup.Item>
        </ListGroup>

        <h5>Exclude Ingredients</h5>
        <Form className="mb-3">
          <Form.Group className="d-flex">
            <Form.Control
              type="text"
              placeholder="Add ingredient to exclude..."
            />
            <Button type="submit" variant="primary" className="ms-2">
              Add
            </Button>
          </Form.Group>
        </Form>
        <ListGroup>
          <ListGroup.Item variant="dark" className="d-flex justify-content-between align-items-center">
            Sample Excluded Ingredient
            <Button variant="danger" size="sm">
              Remove
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default IngredientsFilter;