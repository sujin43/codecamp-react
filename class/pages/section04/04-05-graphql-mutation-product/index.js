import { useMutation, gql } from "@apollo/client"

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) { # 변수의 타입 지정
        createProduct(seller: $seller, createProductInput: $createProductInput){        # 실제 우리가 전달할 변수
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller: "훈이",
                createProductInput: {
                    name: "마우스",
                    detail: "정말 좋은 마우스",
                    price: 3000
                }
            }
        })
        console.log(result)
    }  
    
    return (
        <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
    )

}