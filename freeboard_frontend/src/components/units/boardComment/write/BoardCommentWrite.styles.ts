import styled from '@emotion/styled'

export const CommentInputSection = styled.div`
	width: 120rem;
	padding-top: 4rem;
	margin: 8.6rem auto 3rem;
	border-top: 1px solid #bdbdbd;
`

export const CommentTitle = styled.span`
	width: 100%;
	display: block;
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.7rem;
	padding-left: 3.6rem;
	background: url(../icons/icon_comment.png) no-repeat top left / 2.4rem 2.4rem;
`

export const WriterInfoInputs = styled.div`
	width: 100%;
	margin-top: 4rem;
	display: flex;
	align-items: center;
	gap: 2.4rem;
`

export const WriterInfoInput = styled.input`
	width: 18rem;
	height: 5.2rem;
	border: 1px solid #bdbdbd;
	padding: 1.4rem 2rem;
`

export const CommentInputWrapper = styled.div`
	width: 100%;
	border: 1px solid #bdbdbd;
	margin-top: 2rem;
`

export const CommentInput = styled.textarea`
	width: 100%;
	height: 10.8rem;
	border: none;
	padding: 2rem;
`

export const CommentInputAction = styled.div`
	width: 100%;
	height: 5.2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid #f2f2f2;
	padding: 2rem 0 2rem 2rem;
`

export const CommentLengthCount = styled.span`
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 2.4rem;
	color: #bdbdbd;
`

export const CommentButton = styled.input`
	padding: 1.4rem 1.6rem;
	background-color: ${(props) => (!props.disabled ? '#000' : 'gray')};
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 2.4rem;
	color: #fff;
	border: none;
`
