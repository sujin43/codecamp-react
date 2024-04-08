import * as S from './BoardDetail.styles'

export default function BoardDetailUI({ data, onClickDelete, onClickEdit }) {
	return (
		<S.Wrapper>
			<S.ContentWrapper>
				<S.Header>
					<S.WriterWrapper>
						<img src='/images/img_profile.png' width={56} height={56} alt='프로필 사진' />
						<S.WriteInfo>
							<S.Writer>{data?.fetchBoard?.writer}</S.Writer>
							<S.Date>Date: 2021.02.18</S.Date>
						</S.WriteInfo>
					</S.WriterWrapper>
					<div>
						<S.FileButton type='button'>
							<span className='hidden'>첨부파일</span>
						</S.FileButton>
						<S.LocationButton type='button'>
							<span className='hidden'>위치정보</span>
						</S.LocationButton>
					</div>
				</S.Header>
				<S.Contents>
					<S.Title>{data?.fetchBoard?.title}</S.Title>
					<S.ContentImg>
						<img src='' alt='' />
					</S.ContentImg>
					<S.Content>{data?.fetchBoard?.contents}</S.Content>
					<S.Video></S.Video>
					<S.ButtonWrapper>
						<S.GoodButton type='button'>
							<span>1920</span>
						</S.GoodButton>
						<S.BadButton type='button'>
							<span>1920</span>
						</S.BadButton>
					</S.ButtonWrapper>
				</S.Contents>
			</S.ContentWrapper>
			<S.ButtonWrapper>
				<S.BoardButton type='button'>목록으로</S.BoardButton>
				<S.BoardButton type='button' onClick={onClickEdit}>
					수정하기
				</S.BoardButton>
				<S.BoardButton type='button' onClick={onClickDelete}>
					삭제하기
				</S.BoardButton>
			</S.ButtonWrapper>
		</S.Wrapper>
	)
}
