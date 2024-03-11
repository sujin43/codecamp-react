import { useState } from "react"

//Section05 quize.3 - Javascript let vs React State로 인증번호 생성하기
export default function StateQuize01() {
    
    //state
    const [auth, setAuth] = useState("000000")
    
    function onClickAtuh() {
        //let
        // let number = String(Math.floor((Math.random()*1000000))).padStart(6, "0");
        // document.getElementById("authNumber").innerText = number;

        let number = String(Math.floor((Math.random()*1000000))).padStart(6, "0") 
        setAuth(number)
    }
    
    return (
        <div>
            <div id="authNumber">{auth}</div>
            <button type="button" onClick={onClickAtuh}>인증번호전송</button>
        </div>
    )
}