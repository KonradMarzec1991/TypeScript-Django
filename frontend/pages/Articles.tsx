import {Col, Row} from "react-bootstrap";
import articleItems from "../data/items.json"
import React from "react";
import {ArticleItem} from "../components/ArticleItem";



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