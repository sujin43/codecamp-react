import * as S from './BoardCommentWrite.styles'

export default function BoardCommentWriteUI(props) {
	return (
		<S.CommentInputSection>
			<S.CommentTitle> 댓글</S.CommentTitle>
			<S.WriterInfoInputs>
				<S.WriterInfoInput type='text' placeholder='작성자' onChange={props.onChangeWriter} />
				<S.WriterInfoInput
					type='password'
					placeholder='비밀번호'
					onChange={props.onChangePassword}
				/>
				<S.StarButtonWrapper>
					<S.StarButton type='button'>
						<span className='hidden'>별점</span>
					</S.StarButton>
					<S.StarButton type='button'>
						<span className='hidden'>별점</span>
					</S.StarButton>
					<S.StarButton type='button'>
						<span className='hidden'>별점</span>
					</S.StarButton>
					<S.StarButton type='button'>
						<span className='hidden'>별점</span>
					</S.StarButton>
					<S.StarButton type='button'>
						<span className='hidden'>별점</span>
					</S.StarButton>
				</S.StarButtonWrapper>
			</S.WriterInfoInputs>
			<S.CommentInputWrapper>
				<S.CommentInput
					placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
					onChange={props.onChangeContents}
				/>
				<S.CommentInputAction>
					<S.CommentLengthCount>0/100</S.CommentLengthCount>
					<S.CommentButton type='button' onClick={props.onSubmit}>
						등록하기
					</S.CommentButton>
				</S.CommentInputAction>
			</S.CommentInputWrapper>
		</S.CommentInputSection>
	)
}
