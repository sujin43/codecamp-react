import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id
            number
            message
        }
    }
`

export default function BoardPage() {
    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState(0)

    const [createProduct] = useMutation(CREATE_PRODUCT) 
    const router = useRouter()

    const onChangeSeller = (event) => {
        setSeller(event.target.value)
    }

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeDetail = (event) => {
        setDetail(event.target.value)
    }

    const onChangePrice = (event) => {
        setPrice(event.target.value)
    }

    const onClickSubmit = async() => {
        try {
            const result = await createProduct({
                variables: {
                    seller,
                    createProductInput: {
                        name,
                        detail,
                        price: Number(price)
                    }
                }
            })
            router.push(`/05/boards/${result.data.createProduct._id}`)
        } catch(error) {
            alert(error)
        }
    }


    return (
        <>
            판매자: <input type="text" onChange={onChangeSeller}/> <br/>
            상품명: <input type="text" onChange={onChangeName}/> <br/>
            상품내용: <input type="text" onChange={onChangeDetail}/> <br/>
            상품가격: <input type="text" onChange={onChangePrice}/> <br/>
            <button type="button" onClick={onClickSubmit}>상품 등록</button>
        </>
    )
}