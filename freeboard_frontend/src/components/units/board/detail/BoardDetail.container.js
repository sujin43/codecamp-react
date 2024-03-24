import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import BoardDetailUI from "./BoardDetail.presenter"
import { FETCH_BOARD } from "./BoardDetail.queries"
import { DELETE_BOARD } from "./BoardDetail.queries"

export default function BoardDetail() {
  const router = useRouter()
  const boardId = router.query.boardId

  const [deleteBoard] = useMutation(DELETE_BOARD)
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId
    }
  })

  const onClickEdit = () => {
    //수정하기
    router.push(`/boards/${boardId}/edit`)
  }

  const onClickDelete = () => {
    const result = deleteBoard({
      variables: {
        boardId
      }
    })
    router.push("/boards")
  }

  return <BoardDetailUI data={data} onClickDelete={onClickDelete} onClickEdit={onClickEdit} />
}
