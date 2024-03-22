import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS } from "./BoardList.queries"

export default function BoardList() {
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARDS)
    
    return (
        <BoardListUI data={data}/>
    )
}