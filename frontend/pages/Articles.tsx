import {Card, Col, Row} from "react-bootstrap";
import articleItems from "../data/items.json"
import React from "react";

type ArticleItemProps = {
    id: number,
    title: string,
    author: string,
    imgUrl: string
}

const ArticleItem = ({id, title, author, imgUrl}: ArticleItemProps) => {
    return (
        <Card>
            <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{title}</span>
                    <span className="ms-2 text-muted">{author}</span>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export const Articles = (): React.ReactElement => {
    return (
    <>
        <Row md={2} xs={1} lg={3} className="g-3">
            {articleItems.map(article => (
                <Col key={article.id}>
                    <ArticleItem {...article} />
                </Col>
            ))}
        </Row>
    </>
    )
}