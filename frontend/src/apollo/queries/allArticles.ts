import { gql } from 'apollo-boost';

export const ALL_ARTICLES = gql`
query allArticlesQuery(
	$offset: Int
	$before: String
	$after: String
	$first: Int
	$last: Int
	$title: String
	$category: String
	$author: String
) {
	allArticles(
		offset: $offset
		before: $before
		after: $after
		first: $first
		last: $last
		title: $title
		category: $category
		author: $author
	) {
		edges {
			node {
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
	 }
}
`