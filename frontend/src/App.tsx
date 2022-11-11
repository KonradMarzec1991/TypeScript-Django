import React from "react";
import {Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import {Home} from "../pages/Home";
import {Articles} from "../pages/Articles";
import {About} from "../pages/About";
import {ArticlesApollo} from "../pages/ArticlesApollo";
import {Navbar} from "../components/Navbar";


export const App = (): React.ReactElement => {
  return (
      <Container>
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/about" element={<About />} />
              <Route path="/apollo" element={<ArticlesApollo />} />
          </Routes>
      </Container>
  )
}
