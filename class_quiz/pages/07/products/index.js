import { useMutation, useQuery, gql } from "@apollo/client"

const FETCH_PRODUCTS = gql`
    query {
        fetchProducts {
            _id
            seller
            name
        }
    }
`
const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID) {
        deleteProduct(productId: $productId) {
            message
        }
    }
`

export default function MapQuizePage() {
    const { data } = useQuery(FETCH_PRODUCTS)
    console.log(data)
    const [ deleteProduct ] = useMutation(DELETE_PRODUCT)

    const onClickDelete = async(event) => {
        try {
            const result = await deleteProduct({
                variables: {
                    productId: event.target.id
                },
                refetchQueries: [{
                    query: FETCH_PRODUCTS
                }]
            })
        } catch(error) {
            alert(error)
        }
    }
    return (
        <div>
            {data?.fetchProducts.map(el => (
                <div key={el._id}>
                    <input type="checkbox" />
                    <span style={{margin: "10px"}}>{el.seller}</span>
                    <span style={{margin: "10px"}}>{el.name}</span>
                    <button id={el._id} onClick={onClickDelete} style={{margin: "10px"}}>삭제</button>
                </div>
            ))}
        </div>
    )
}