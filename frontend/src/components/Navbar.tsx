import {Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <NavbarBs bg="dark" variant="dark" style={{marginBottom: "20px" }}>
            <Container>
                <Nav className="me-auto">
                  <Nav.Link to="/" as={NavLink}>
                    Home
                  </Nav.Link>
                  <Nav.Link to="/articles" as={NavLink}>
                    Articles
                  </Nav.Link>
                  <Nav.Link to="/about" as={NavLink}>
                    About
                  </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}