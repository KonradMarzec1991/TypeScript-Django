import React from "react";
import {Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import {Home} from "./pages/Home";
import {Articles} from "./pages/Articles";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";
import {Article} from "./pages/Article";


export const App = (): React.ReactElement => {
  return (
      <Container>
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/about" element={<About />} />
              <Route path="/articles/:id" element={<Article />} />
          </Routes>
      </Container>
  )
}
