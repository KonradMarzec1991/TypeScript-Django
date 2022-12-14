import { gql } from 'apollo-boost';

export const ARTICLE = gql`
query articleQuery($id: ID!) {
	article(id: $id) {
		id
		createdAt
		modifiedAt
		title
		category
		authors {
			username
		}
		image
		content
	}
}
`