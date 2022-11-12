import {Col, Row} from "react-bootstrap";
import React from "react";
import {ArticleItem} from "../components/ArticleItem";
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
    const {error, loading, data} = useQuery(
        ALL_ARTICLES,
        // { variables: {title: "Natura"}}
    );

    if (error) return <div>Error</div>;
    if (!data) return <div>Null</div>;
    if (loading) return <p>Loading...</p>;

    const {allArticles} = data;

    return (
    <>
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