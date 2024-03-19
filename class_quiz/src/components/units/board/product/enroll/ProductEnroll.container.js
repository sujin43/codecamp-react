import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import ProductEnrollUI from "./ProductEnroll.presenter"
import { CREATE_PRODUCT } from "./ProductEnroll.queries"

export default function ProductEnroll() {
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

    return <ProductEnrollUI 
    onChangeSeller={onChangeSeller}
    onChangeName={onChangeName}
    onChangeDetail={onChangeDetail}
    onChangePrice={onChangePrice}
    onClickSubmit={onClickSubmit}
    />
}