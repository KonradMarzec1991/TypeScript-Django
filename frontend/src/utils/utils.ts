export const addUrlToImage = (imageURL: string) => `http://127.0.0.1:8000/media/${imageURL}`

export const combineAuthors = (authors: {username: string}[]) => {
    return authors.map(author => author.username).join(", ");
}