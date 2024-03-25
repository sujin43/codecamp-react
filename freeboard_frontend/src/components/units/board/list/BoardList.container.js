import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS } from './BoardList.queries'

export default function BoardList() {
	const router = useRouter()
	const { data } = useQuery(FETCH_BOARDS)

	const onClickMove = (boardId) => {
		router.push(`/boards/${boardId}`)
	}

	const onClickWrite = () => {
		router.push('/boards/new')
	}

	return <BoardListUI data={data} onClickMove={onClickMove} onClickWrite={onClickWrite} />
}
