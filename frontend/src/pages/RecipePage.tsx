import React from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';

const RecipePage = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="mb-4">Chocolate Chip Cookies</h1>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Card bg="dark" text="white" className="mb-4">
            <Card.Img variant="top" src="/api/placeholder/800/400" alt="Chocolate Chip Cookies" />
            <Card.Body>
              <Card.Title>Description</Card.Title>
              <Card.Text>
                Delicious homemade chocolate chip cookies that are crispy on the outside and chewy on the inside.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark" text="white">
            <Card.Body>
              <Card.Title>Instructions</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item variant="dark">1. Preheat oven to 375°F (190°C).</ListGroup.Item>
                <ListGroup.Item variant="dark">2. Cream together butter, sugar, and brown sugar.</ListGroup.Item>
                <ListGroup.Item variant="dark">3. Beat in eggs and vanilla.</ListGroup.Item>
                <ListGroup.Item variant="dark">4. Mix in flour, baking soda, and salt.</ListGroup.Item>
                <ListGroup.Item variant="dark">5. Stir in chocolate chips.</ListGroup.Item>
                <ListGroup.Item variant="dark">6. Drop spoonfuls of dough onto ungreased baking sheets.</ListGroup.Item>
                <ListGroup.Item variant="dark">7. Bake for 9 to 11 minutes or until golden brown.</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="dark" text="white" className="mb-4">
            <Card.Body>
              <Card.Title>Ingredients</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item variant="dark">2 1/4 cups all-purpose flour</ListGroup.Item>
                <ListGroup.Item variant="dark">1 tsp baking soda</ListGroup.Item>
                <ListGroup.Item variant="dark">1 tsp salt</ListGroup.Item>
                <ListGroup.Item variant="dark">1 cup butter, softened</ListGroup.Item>
                <ListGroup.Item variant="dark">3/4 cup granulated sugar</ListGroup.Item>
                <ListGroup.Item variant="dark">3/4 cup brown sugar</ListGroup.Item>
                <ListGroup.Item variant="dark">2 large eggs</ListGroup.Item>
                <ListGroup.Item variant="dark">2 tsp vanilla extract</ListGroup.Item>
                <ListGroup.Item variant="dark">2 cups semi-sweet chocolate chips</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card bg="dark" text="white">
            <Card.Body>
              <Card.Title>Recipe Info</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item variant="dark">
                  Prep Time: <Badge bg="primary">15 mins</Badge>
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Cook Time: <Badge bg="primary">11 mins</Badge>
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Total Time: <Badge bg="primary">26 mins</Badge>
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Servings: <Badge bg="primary">24 cookies</Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipePage;