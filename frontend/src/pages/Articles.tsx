import {Button, Col, Container, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import {ArticleItem} from "../containers/ArticleItem";
import {useQuery} from "@apollo/client";
import {ALL_ARTICLES} from "../apollo/queries/allArticles";


type Author = {
    username: string
}

type Article = {
    id: string,
    createdAt: string
    modifiedAt: string
    title: string
    category: string
    image: string
    authors: Author[]
}

type ArticleNode = {
    node: Article
}


export const Articles = (): React.ReactElement => {
    const {error, loading, data} = useQuery(ALL_ARTICLES);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSubmitQuery = (e: any) => {
        e.preventDefault();
        console.log(searchQuery)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <div>Error</div>;
    if (!data) return <div>Not data</div>;

    const {allArticles} = data;

    return (
        <>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
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
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <Row md={2} xs={1} lg={3} className="g-3">
                {allArticles.edges.map((item: ArticleNode) => (
                    <Col key={item.node.id}>
                        <ArticleItem {...item.node} />
                    </Col>
                ))}
            </Row>
        </>
    )
}
