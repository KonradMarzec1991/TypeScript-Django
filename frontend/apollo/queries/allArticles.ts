import { gql } from 'apollo-boost';

export const ALL_ARTICLES = gql`
  query allArticlesQuery {
    allArticles {
      id
      createdAt
      modifiedAt
      title
      authors {
        username
      }
      category
      image
     }
  }
`