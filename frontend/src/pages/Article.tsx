import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {ARTICLE} from "../apollo/queries/article";
import {addUrlToImage, combineAuthors} from "../utils/utils";
import "./Article.css";
import {Container} from "react-bootstrap";
import Moment from 'moment';


const Content = (data: any) => {
    return (
        <>
            {data.contentPieces.map((piece: any) => {
                return <div style={{
                    marginBottom: "10px",
                    textAlign: "justify"
                }}>
                    {piece}
                </div>
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

    const contentPieces: string[] = (
        content.replaceAll("\r", "").split("\n").filter((piece: string) => piece !== "\\n")
    );

    return (
        <Container>
            <section>
                <p style={{float: "right"}}>
                    Added at {Moment(createdAt).format("DD/MM/yyyy")}
                </p>
                <div style={{float: "left", marginRight: "1rem"}}>
                    <img src={addUrlToImage(image)} alt="" style={{width: "500px"}} />
                </div>
                <div>
                    <h2 style={{
                        display: "block",
                        textAlign: "center",
                        marginBottom: "0",
                        marginLeft: "2rem"
                    }}>
                        {title}
                    </h2>
                    <p style={{ textAlign: "center", marginBottom: "1.5rem"}}>
                        by {combineAuthors(authors)}
                    </p>
                    <Content contentPieces={contentPieces} />
                </div>
            </section>
        </Container>
    )
}