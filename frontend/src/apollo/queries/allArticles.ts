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
	$authors: String
) {
	allArticles(
		offset: $offset
		before: $before
		after: $after
		first: $first
		last: $last
		title: $title
		category: $category
		authors: $authors
	) {
		edges {
			node {
				id
				createdAt
				modifiedAt
				title
				category
				authors {
					username
				}
				image
			}
		}
	 }
}
`