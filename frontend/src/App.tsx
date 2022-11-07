import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Container, Nav} from "react-bootstrap";
import {Home} from "../pages/Home";
import {Articles} from "../pages/Articles";
import {About} from "../pages/About";
import {Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom"


export const App = (): React.ReactElement => {
  return (
      <Container>
        <Navbar bg="dark" variant="dark">
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
        </Navbar>

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/about" element={<About />} />
          </Routes>
      </Container>
  )
}
