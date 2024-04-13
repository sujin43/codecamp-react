import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import BoardCommentListUI from './BoardCommentList.presenter'
import { FETCH_BOARD_COMMENTS } from './BoardCommentList.queries'
import type { IQuery, IQueryFetchBoardCommentsArgs } from '@/src/commons/types/generated/types'

export default function BoardCommentList() {
	const router = useRouter()

	const { data } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(
		FETCH_BOARD_COMMENTS,
		typeof router.query.boardId === 'string'
			? {
					variables: {
						boardId: router.query.boardId,
					},
				}
			: { skip: true }
	)
	return data ? <BoardCommentListUI comments={data} /> : <div>Loading...</div>
}
