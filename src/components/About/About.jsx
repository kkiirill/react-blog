import { Accordion } from "react-bootstrap";
import './About.css';

export default function About() {
  return (
    <div>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>About us</Accordion.Header>
          <Accordion.Body>
            Text must be here
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
