import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";


const Search = (): React.ReactElement => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSubmitQuery = (e: any) => {
        e.preventDefault();
        console.log(searchQuery)
    }

    return (
        <>
          <Form className="d-flex" onSubmit={handleSubmitQuery} style={{marginBottom: "20px"}}>
              <Form.Control
                type="input"
                placeholder="Your favourite article..."
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e: any) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-warning" type="submit">Search</Button>
          </Form>
        </>
    )
}

export const SearchComponent = () => {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}><Search /></Col>
                <Col></Col>
            </Row>
        </Container>
    )
}