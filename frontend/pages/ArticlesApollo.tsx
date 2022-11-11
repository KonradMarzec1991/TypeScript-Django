import {useQuery} from "@apollo/client";
import {ALL_ARTICLES} from "../apollo/queries/allArticles";
import * as path from "path";

type Article = {
    id: string,
    createdAt: string
    modifiedAt: string
    title: string
    category: string
    image: string
}

export const ArticlesApollo = () => {
    const {error, loading, data} = useQuery(ALL_ARTICLES);

    if (!data) return null;
    if (loading) return <p>Loading...</p>;

    const {allArticles} = data;
    console.log(allArticles);

    // return <p>{allArticles[0].title}</p>

    return (
        <ul>
            {allArticles.map((article: Article) => {
                return <li key={article.id}>{article.title}</li>
            })}
        </ul>
    )
}