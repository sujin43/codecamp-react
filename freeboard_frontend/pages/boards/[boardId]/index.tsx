import BoardDetail from '@/src/components/units/board/detail/BoardDetail.container'
import BoardCommentWrite from '../../../src/components/units/boardComment/write/BoardCommentWrite.container'
import BoardCommentList from '../../../src/components/units/boardComment/list/BoardCommentList.container'
import { CommentTitle } from '@/src/components/units/boardComment/write/BoardCommentWrite.styles'

export default function BoardDetailPage() {
	return (
		<>
			<BoardDetail />
			<BoardCommentWrite>
				<CommentTitle>댓글</CommentTitle>
			</BoardCommentWrite>
			<BoardCommentList />
		</>
	)
}
