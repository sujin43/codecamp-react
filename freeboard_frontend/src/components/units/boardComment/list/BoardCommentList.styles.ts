import styled from '@emotion/styled'

export const CommentListWrapper = styled.ul`
	width: 120rem;
	display: flex;
	flex-direction: column;
	margin: 0 auto;

	> div {
		margin-top: 0;
		border-top: none;
		padding-top: 0;
		> form > div:first-type-of {
			margin-top: 0;
		}
	}
`
