import {Col, Row} from "react-bootstrap";
import React from "react";
import {ArticleItem} from "../components/ArticleItem";
import {useQuery} from "@apollo/client";
import {ALL_ARTICLES} from "../apollo/queries/allArticles";

type Article = {
    id: string,
    createdAt: string
    modifiedAt: string
    title: string
    category: string
    image: string
    authors: {username: string}[]
}


export const Articles = (): React.ReactElement => {
    const {error, loading, data} = useQuery(ALL_ARTICLES);

    if (error) return <div>Error</div>;
    if (!data) return <div>Null</div>;
    if (loading) return <p>Loading...</p>;

    const {allArticles} = data;

    return (
    <>
        <Row md={2} xs={1} lg={3} className="g-3">
            {allArticles.map((article: Article) => (
                <Col key={article.id}>
                    <ArticleItem {...article} />
                </Col>
            ))}
        </Row>
    </>
    )
}