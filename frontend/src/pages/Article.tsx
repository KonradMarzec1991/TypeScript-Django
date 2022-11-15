import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {ARTICLE} from "../apollo/queries/article";
import {addUrlToImage, combineAuthors} from "../utils/utils";
import "./Article.css";
import {Col, Container, Row} from "react-bootstrap";
import Moment from 'moment';


const Content = (contentPieces: string[]) => {
        return (
            <>
                {contentPieces.map(piece => {
                    return <><div>{piece}</div><br/></>
                })}
            </>
        )
}


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
    const {title, authors, image, content, createdAt} = article;

    const contentPieces: string[] = content.replaceAll("\r", "").split("\n").filter((piece: string) => piece !== "\\n");
    console.log(contentPieces);

    return (
        <Container>
            <Row className="justify-content-md-center" style={{marginBottom: "20px"}}>
                <Col></Col>
                <Col>
                    <span className="display-6">{title}</span>
                    <span className="display-7"> by {combineAuthors(authors)}</span>
                </Col>
                <Col>
                    <div style={{textAlign: "right"}}>
                        Added at {Moment(createdAt).format("DD/MM/yyyy")}
                    </div>
                </Col>
            </Row>
            <Row style={{marginBottom: "20px"}}>
                <Col xs lg="12">
                        <img src={addUrlToImage(image)} alt="" className="center" />
                </Col>
            </Row>
            <Row>
                <Content contentPieces={contentPieces}/>
            </Row>
        </Container>
    )
}