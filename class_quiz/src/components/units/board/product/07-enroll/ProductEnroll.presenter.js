import { ProductButton } from "./ProductEnroll.styles"

export default function ProductEnrollUI({isActive, onChangeSeller, onChangeName, onChangeDetail, onChangePrice, onClickSubmit}) {
    return (
        <div>
            판매자: <input type="text" onChange={onChangeSeller}/> <br/>
            상품명: <input type="text" onChange={onChangeName}/> <br/>
            상품내용: <input type="text" onChange={onChangeDetail}/> <br/>
            상품가격: <input type="text" onChange={onChangePrice}/> <br/>
            <ProductButton type="button" isActive={isActive} onClick={onClickSubmit}>상품 등록</ProductButton>
        </div>
    )
}