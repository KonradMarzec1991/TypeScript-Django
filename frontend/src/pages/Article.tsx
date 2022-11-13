import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {ARTICLE} from "../apollo/queries/article";
import {addUrlToImage, combineAuthors} from "../utils/utils";
import "./Article.css";
import {Col, Container, Row} from "react-bootstrap";


export const Article = () => {
    const {id} = useParams();
    const {error, loading, data} = useQuery(
        ARTICLE,
        { variables: {id}}
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <div>Error</div>;
    if (!data) return <div>Not data</div>;

    const {article} = data;
    const {title, authors, image, content} = article;

    return (
        <Container>
            <Row className="justify-content-md-center" style={{marginBottom: "20px"}}>
                <Col></Col>
                <Col>
                    <span className="display-6">{title}</span>
                    <span className="display-7"> by {combineAuthors(authors)}</span>
                </Col>
                <Col></Col>
            </Row>
            <Row style={{marginBottom: "20px"}}>
                <Col xs lg="12">
                        <img src={addUrlToImage(image)} alt="" className="center" />
                </Col>
            </Row>
            <Row>
                {content}
            </Row>
        </Container>
    )
}