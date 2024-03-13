import { useMutation, gql } from "@apollo/client"

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title:$title, contents: $contents){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {
    const [sampleGraphql] = useMutation(CREATE_BOARD)

    const onClickSubmit = async () => {
        const result = await sampleGraphql({
            variables: {                            //variables = $ 역할을 함
                writer: "훈이",
                title: "안녕하세요!",
                contents: "반갑습니다"
            }
        })
        console.log(result)
    }  
    
    return (
        <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
    )

}