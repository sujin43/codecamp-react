import { useRef } from 'react'
import { Controller } from 'react-hook-form'
import Rating from '../Rating/Rating.container'
import * as S from './BoardCommentWrite.styles'
import { StarButtonWrapper } from '../Rating/Rating.styles'
import { IBoardCommentWriteProps } from './BoardCommentWrite.types'

export default function BoardCommentWriteUI(props: IBoardCommentWriteProps) {
	const ref = useRef<HTMLInputElement>(null)

	return (
		<S.CommentInputSection>
			<S.CommentTitle> 댓글</S.CommentTitle>
			<form onSubmit={props.handleSubmit(props.onSubmit)}>
				<S.WriterInfoInputs>
					<S.WriterInfoInput
						type="text"
						placeholder="작성자"
						{...props.register('writer', { required: true })}
					/>
					<S.WriterInfoInput
						type="password"
						placeholder="비밀번호"
						{...props.register('password', { required: true })}
					/>
					<Controller
						name="rating"
						control={props.control}
						rules={{ required: true }}
						render={({ field }) => (
							<StarButtonWrapper>
								{[1, 2, 3, 4, 5].map((count, index) => (
									<Rating
										{...field}
										type="radio"
										key={index}
										value={count}
										index={index}
										ref={ref}
										className={index < field.value ? 'on' : ''}
									/>
								))}
							</StarButtonWrapper>
						)}
					/>
				</S.WriterInfoInputs>
				<S.CommentInputWrapper>
					<S.CommentInput
						maxLength={100}
						placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
						{...props.register('contents', { required: true })}
					/>
					<S.CommentInputAction>
						<S.CommentLengthCount>{props.watch('contents')?.length}/100</S.CommentLengthCount>
						<S.CommentButton type="submit" value={'등록하기'} disabled={props.disabled} />
					</S.CommentInputAction>
				</S.CommentInputWrapper>
			</form>
		</S.CommentInputSection>
	)
}
