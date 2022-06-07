import { Row, Container } from "react-bootstrap";

const CommentsItem = ({ comments }) => {
console.log(comments)
  return (
    <div>
      <Container style={{ padding: "40px 20px", border: "1px solid" }}>
        <Row>
          <p style={{ margin: 0, textAlign: "left" }}>{comments.body}</p>
          <p style={{ margin: 0, textAlign: "left" }}>{comments.time}</p>
        </Row>
      </Container>
    </div>
  );
};

export default CommentsItem;