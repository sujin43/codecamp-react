import { useMutation, useQuery } from '@apollo/client'
import type { NextRouter } from 'next/router'
import { useRouter } from 'next/router'
import BoardDetailUI from './BoardDetail.presenter'
import { FETCH_BOARD, DELETE_BOARD } from './BoardDetail.queries'
import { IQuery, IQueryFetchBoardArgs } from '@/src/commons/types/generated/types'

export default function BoardDetail() {
	const router: NextRouter = useRouter()
	const boardId: string = typeof router.query.boardId === 'string' ? router.query.boardId : ''

	const [deleteBoard] = useMutation(DELETE_BOARD)
	const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
		variables: {
			boardId,
		},
	})

	const onClickEdit = () => {
		// 수정하기
		void router.push(`/boards/${boardId}/edit`)
	}

	const onClickDelete = () => {
		const result = deleteBoard({
			variables: {
				boardId,
			},
		})
		console.log(result)
		void router.push('/boards')
	}

	return <BoardDetailUI data={data} onClickDelete={onClickDelete} onClickEdit={onClickEdit} />
}
