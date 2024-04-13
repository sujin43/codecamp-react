import * as S from './BoardCommentList.styles'
import type { IQuery, IBoardComment } from '@/src/commons/types/generated/types'
import BoardCommentItem from '../comment/BoardCommentItem.container'

export default function BoardCommentListUI({
	comments,
}: {
	comments: Pick<IQuery, 'fetchBoardComments'>
}) {
	return (
		<S.CommentListWrapper>
			{comments?.fetchBoardComments?.map((comment: IBoardComment) => (
				<BoardCommentItem key={comment._id} comment={comment} />
			))}
		</S.CommentListWrapper>
	)
}
