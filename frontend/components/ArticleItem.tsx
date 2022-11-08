import {useState} from "react";
import {Card} from "react-bootstrap";


type ArticleItemProps = {
    id: number,
    title: string,
    author: string,
    imgUrl: string
}

const CardWrapper = ({id, title, author, imgUrl}: ArticleItemProps) => {
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
            <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{title}</span>
                    <span className="ms-2 text-muted">by {author}</span>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export const ArticleItem = (props: ArticleItemProps) => {
    return (
        <CardWrapper {...props}/>
    )
}