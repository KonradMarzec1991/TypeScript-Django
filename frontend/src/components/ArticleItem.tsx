import {Card} from "react-bootstrap";
import {useState} from "react";
import {addUrlToImage, combineAuthors} from "../utils/utils";
import {Link} from "react-router-dom";
import "./ArticleItem.css";


type Author = {
    username: string
}

type ArticleItemProps = {
    id: string,
    title: string,
    category: string,
    image: string,
    authors: Author[]
}

const CardWrapper = ({id, title, authors, image}: ArticleItemProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Card
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            style={{
                opacity: hovered ? 0.9 : 1,
                transitionTimingFunction: "cubic-bezier(0.1, 0.7, 1.0, 0.1)"
            }}
        >
            <Card.Img
                variant="top"
                src={addUrlToImage(image)}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-5">{title}</span>
                    <span className="ms-2 text-muted">by {combineAuthors(authors)}</span>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export const ArticleItem = (props: ArticleItemProps) => {
    const link = `/articles/${props.id}`;

    return (
        <Link to={link}>
            <CardWrapper {...props}/>
        </Link>
    )
}