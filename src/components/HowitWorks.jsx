import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { colors } from '../values/colors';

const questionArray = [
  {
    question: 'Choose Network',
    answer: 'When the swap process is over and the exchange is successfully finished, you will get the desired crypto.',
  },
  {
    question: 'Choose Coin',
    answer: 'When the swap process is over and the exchange is successfully finished, you will get the desired crypto.',
  },
  {
    question: 'Place Address',
    answer: 'When the swap process is over and the exchange is successfully finished, you will get the desired crypto.',
  },
  {
    question: 'Amount To Send',
    answer: 'When the swap process is over and the exchange is successfully finished, you will get the desired crypto.',
  },
  {
    question: 'Schedule Your Tx',
    answer: 'When the swap process is over and the exchange is successfully finished, you will get the desired crypto.',
  },
  {
    question: 'Send',
    answer: 'When the swap process is over and the exchange is successfully finished, you will get the desired crypto.',
  },
];
function HowitWorks() {
  return (
    <>
      <h2 className="text-white">HOW IT WORKS</h2>
      <Row xs={1} md={3} className="g-4">
        {questionArray.map((item, idx) => (
          <Col key={idx}>
            <Card style={{ background: '#1B3A3F' }}>
              <Card.Body>
                <Card.Title style={{ color: colors.primary }}>Step {idx + 1}</Card.Title>
                <br />
                <Card.Title className="text-white">{item.question}</Card.Title>
                <Card.Text className="text-white">
                  {item.answer}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HowitWorks;
