import { MouseEvent } from 'react'
import { useQuery, gql } from '@apollo/client'
import { IBoardReturn } from '@/src/commons/types/generated/types'

const FETCH_BOARD = gql`
	query {
		fetchBoards {
			number
			writer
			title
			contents
		}
	}
`

export default function MapBoardPage() {
	const { data } = useQuery(FETCH_BOARD)

	const onclickAlert = (event: MouseEvent<HTMLDivElement>) => {
		alert(event.currentTarget.id + '님이 작성한 글입니다.')
	}

	const onClickTitle = () => {
		alert('클릭타이틀')
	}

	return (
		<div>
			{data?.fetchBoards.map((el: IBoardReturn) => (
				<div id={el.writer} onClick={onclickAlert}>
					{/* 이벤트 위임 */}
					<input type="checkbox" />
					<span style={{ margin: '10px' }}>{el.number}</span>
					<button style={{ margin: '10px' }} onClick={onClickTitle}>
						{el.title}
					</button>
					<span style={{ margin: '10px' }}>{el.writer}</span>
				</div>
			))}
		</div>
	)
}
