import { Container, Navbar } from "react-bootstrap"
import './Header.css';
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
          <NavLink to="/" style={{ color: 'white', textDecoration: 'none'}}>Home</NavLink>
          <NavLink to="/about" style={{ color: 'white', textDecoration: 'none'}}>About</NavLink>
      </Container>
    </Navbar>
  )
}