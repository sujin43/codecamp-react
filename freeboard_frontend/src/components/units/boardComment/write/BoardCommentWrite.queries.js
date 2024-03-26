import { gql } from '@apollo/client'

export const CREATE_BOARD_COMMENT = gql`
	mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
		createBoardComment(boardId: $boardId, createBoardCommentInput: $createBoardCommentInput) {
			_id
		}
	}
`
