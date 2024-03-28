import { MouseEvent } from 'react'
import { useQuery, gql } from '@apollo/client'
import { IBoardReturn } from '@/src/commons/types/generated/types'
import Checkbox from './checkbox'

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

	const onClick1 = (event: MouseEvent<HTMLInputElement>) => {
		alert('1번 클릭')
	}
	const onClick4 = (event: MouseEvent<HTMLSpanElement>) => {
		event.stopPropagation()
		alert('4번 클릭')
	}

	return (
		<div>
			{data?.fetchBoards.map((el: IBoardReturn) => (
				<div id={el.writer} onClick={onClick1}>
					{/* 이벤트 위임 */}
					<Checkbox />
					<span style={{ margin: '10px' }} onClick={onClick4}>
						{el.number}
					</span>
					<button style={{ margin: '10px' }}>{el.title}</button>
					<span style={{ margin: '10px' }}>{el.writer}</span>
				</div>
			))}
		</div>
	)
}
