import {Card} from "react-bootstrap";


type ArticleItemProps = {
    id: number,
    title: string,
    author: string,
    imgUrl: string
}

export const ArticleItem = ({id, title, author, imgUrl}: ArticleItemProps) => {
    return (
        <Card>
            <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{title}</span>
                    <span className="ms-2 text-muted">{author}</span>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}