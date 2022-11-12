import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {ARTICLE} from "../apollo/queries/article";
import {addUrlToImage} from "../utils/utils";

export const Article = () => {
    const {id} = useParams();
    const {error, loading, data} = useQuery(
        ARTICLE,
        { variables: {id: id}}
        );

    console.log("******");
    console.log("******");
    console.log(data.article);

    return (
        <div>
            {/*<img src={addUrlToImage(image)} alt=""/>*/}
            <p>xD</p>
        </div>
    )
}