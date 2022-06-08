import { Container } from "react-bootstrap";

const CommentsItem = ({ comments }) => {
  return (
    <div>
      <Container style={{ display: "flex", padding: "40px 20px", border: "1px solid" }}>
            <img style={{width: '50px', height: '50px' }} src='https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?resize=200%2C140&ssl=1' alt='avatar' />
            <p style={{ margin: '0 10px', textAlign: "left" }}>{comments.body}</p>
            <p>{comments.timestamp}</p>
      </Container>
    </div>
  );
};

export default CommentsItem;