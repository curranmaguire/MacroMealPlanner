import React from 'react';
import { Container, Row, Col, ListGroup, Form, Button, Badge } from 'react-bootstrap';

// ShoppingListItem component
const ShoppingListItem = ({ item }: { item: { id: number, name: string, quantity: number } }) => (
  <ListGroup.Item className="d-flex justify-content-between align-items-center">
    {item.name}
    <span>
      <Badge bg="primary" pill>{item.quantity}</Badge>
      <Button variant="outline-danger" size="sm" className="ms-2" onClick={() => {}}>
        Remove
      </Button>
    </span>
  </ListGroup.Item>
);

// Sample data
const items = [
  { id: 1, name: 'Apples', quantity: 2 },
  { id: 2, name: 'Milk', quantity: 1 },
  { id: 3, name: 'Bread', quantity: 1 },
];

const ShoppingListPage = () => {
  // In a real application, you'd use state here


  return (
    <Container className="mt-5">
      <h1 className="mb-4">Shopping List</h1>
      <Row>
        <Col md={6}>
          <h2>Add Item</h2>
          <Form>
            <Form.Group className="mb-3" controlId="itemName">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" placeholder="Enter item name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="itemQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" placeholder="Enter quantity" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add to List
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h2>Your Shopping List</h2>
          <ListGroup>
            {items.map(item => (
              <ShoppingListItem key={item.id} item={item}  />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingListPage;