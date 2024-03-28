import styled from '@emotion/styled'

export const StarButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
`

export const StarButton = styled.input`
	-webkit-appearance: none; // 웹킷 브라우저에서 기본 스타일 제거
	-moz-appearance: none; // 모질라 브라우저에서 기본 스타일 제거
	appearance: none;
	width: 2.4rem;
	height: 2.4rem;
	background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z' fill='%23BDBDBD'/%3E%3C/svg%3E%0A");
	border: none;

	&.on {
		background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z' fill='%23FFD600'/%3E%3C/svg%3E%0A");
	}
`
