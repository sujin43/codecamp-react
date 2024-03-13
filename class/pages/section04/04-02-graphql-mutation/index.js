import { useMutation, gql } from "@apollo/client"

const CREATE_BOARD = gql`mutation{
    createBoard(writer: "철수", title:"안녕하세요", contents: "반갑습니다"){
        _id
        number
        message
    }
}
`

export default function GraphqlMutationPage() {
    const [sampleGraphql] = useMutation(CREATE_BOARD)

    const onClickSubmit = async () => {
        const result = await sampleGraphql()
        console.log(result)
    }  
    
    return (
        <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
    )

}