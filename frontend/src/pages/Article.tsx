import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {ARTICLE} from "../apollo/queries/article";
import {addUrlToImage} from "../utils/utils";
import React from "react";

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
    console.log(content);

    return (
        <div>
            <img src={addUrlToImage(image)} alt=""/>
            <p>{content}</p>
        </div>
    )
}