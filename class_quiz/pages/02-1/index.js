import { useState } from "react"

//Section05 quize.1 - Javascript let vs React State로 버튼 텍스트 변경하기
export default function StateQuize01() {
    
    //state
    const [btnText, setBtnText] = useState("안녕하세요")
    
    function onClickButton() {
        //let
        // let button = document.getElementById("btn");
        // button.innerText = "반갑습니다"

        //state
        setBtnText("반갑습니다")
    }
    
    return (
        <div>
            <button type="button" id="btn" onClick={onClickButton}>{btnText}</button>
        </div>
    )
}