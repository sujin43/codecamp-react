import { gql } from '@apollo/client'

export const CREATE_BOARD_COMMENT = gql`
	mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
		createBoardComment(boardId: $boardId, createBoardCommentInput: $createBoardCommentInput) {
			_id
		}
	}
`

export const UPDATE_BOARD_COMMENT = gql`
	mutation updateBoardComment(
		$updateBoardCommentInput: UpdateBoardCommentInput!
		$password: String
		$boardCommentId: ID!
	) {
		updateBoardComment(
			updateBoardCommentInput: $updateBoardCommentInput
			password: $password
			boardCommentId: $boardCommentId
		) {
			_id
		}
	}
`
