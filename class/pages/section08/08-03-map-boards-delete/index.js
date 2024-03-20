import { useQuery, gql, useMutation } from "@apollo/client"

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

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int) {
        deleteBoard(number: $number) {
            message
        }
    }
`

export default function MapBoardDeletePage() {
    const { data } = useQuery(FETCH_BOARD)
    const [ deleteBoard ] = useMutation(DELETE_BOARD)

    const onClickDelete = async(event) => {
        try {
            const result = await deleteBoard({
                variables: {
                    number: Number(event.target.id)
                },
                refetchQueries: [{query: FETCH_BOARD}]
            })
        } catch(error) {
            alert(error)
        }
    }
    
    return (
        <div>
            {data?.fetchBoards.map(el => (
                <div key={el.number}> {/* index는 게시글을 삭제할 때 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨. 즉, 유일하지 않아 오류 발생 */}
                    <input type="checkbox"/>
                    <span style={{margin: "10px"}}>{el.number}</span> 
                    <button style={{margin: "10px"}}>{el.title}</button> 
                    <span style={{margin: "10px"}}>{el.writer}</span>
                    <button id={el.number} onClick={onClickDelete}>삭제</button>
                </div>
            ))}
        </div>
    )   
}