import { StarButtonWrapper, StarButton } from '../write/BoardCommentWrite.styles'
import * as S from './BoardCommentList.styles'

export default function BoardCommentListUI({ comments }) {
	return (
		<S.CommentListWrapper>
			{comments?.fetchBoardComments.map((comment) => (
				<S.CommentListItem key={comment._id}>
					<S.CommentContentWrapper>
						<img src='@/images/img_profile.png' width={40} height={40} alt='프로필 사진' />
						<div>
							<S.CommentContentsTop>
								<S.CommentWriter>{comment.writer}</S.CommentWriter>
								<StarButtonWrapper>
									<StarButton type='button' />
									<StarButton type='button' />
									<StarButton type='button' />
									<StarButton type='button' />
									<StarButton type='button' />
								</StarButtonWrapper>
							</S.CommentContentsTop>
							<S.CommentContent>{comment.contents}</S.CommentContent>
							<S.CommentDate>{comment.createdAt}</S.CommentDate>
						</div>
					</S.CommentContentWrapper>
					<S.CommentActionButtons>
						<S.ModifyButton type='button'>
							<span className='hidden'>수정</span>
						</S.ModifyButton>
						<S.DeleteButton type='button'>
							<span className='hidden'>삭제</span>
						</S.DeleteButton>
					</S.CommentActionButtons>
				</S.CommentListItem>
			))}
		</S.CommentListWrapper>
	)
}
