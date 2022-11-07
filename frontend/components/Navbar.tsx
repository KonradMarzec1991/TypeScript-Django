import {Button, Container, Form, Nav, Navbar as NavbarBs} from "react-bootstrap";
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
                <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-warning">Search</Button>
              </Form>
            </Container>
        </NavbarBs>
    )
}