import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS } from './BoardList.queries'
import { IQuery, IQueryFetchBoardArgs } from '@/src/commons/types/generated/types'

export default function BoardList() {
	const router = useRouter()
	const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardArgs>(FETCH_BOARDS)

	const onClickMove = (boardId: string) => {
		router.push(`/boards/${boardId}`)
	}

	const onClickWrite = () => {
		router.push('/boards/new')
	}

	return <BoardListUI data={data} onClickMove={onClickMove} onClickWrite={onClickWrite} />
}
