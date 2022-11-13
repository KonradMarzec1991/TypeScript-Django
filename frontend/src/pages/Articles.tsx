import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {ArticleItem} from "../containers/ArticleItem";
import {useQuery} from "@apollo/client";
import {ALL_ARTICLES} from "../apollo/queries/allArticles";
import {SearchComponent} from "../components/Search";

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


const Articles = (): React.ReactElement => {
    const {error, loading, data} = useQuery(ALL_ARTICLES);

    if (loading) return <p>Loading...</p>;
    if (error) return <div>Error</div>;
    if (!data) return <div>Not data</div>;

    const {allArticles} = data;

    return (
        <Row md={2} xs={1} lg={3} className="g-3">
            {allArticles.edges.map((item: ArticleNode) => (
                <Col key={item.node.id}>
                    <ArticleItem {...item.node} />
                </Col>
            ))}
        </Row>
    )
}


export const ArticlesComponent = () => {
    return (
        <>
            <SearchComponent/>
            <Articles/>
        </>
    )
}