import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CardItem {
  id: string | number;
  title: string;
  text: string;
  imageSrc: string;
}

interface CardListProps {
  cards: CardItem[];
}

const InlineCardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {cards.map((card) => (
          <Col key={card.id}>
            <Card>
              <Card.Img variant="top" src={card.imageSrc} alt={card.title} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InlineCardList;