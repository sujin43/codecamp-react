import { useState } from "react"

//Section05 quize.2 - Javascript let vs React State로 카운터 만들기
export default function StateQuize01() {
    
    //state
    const [count, setCount] = useState(0)
    
    function onClickCount() {
        //let
        // let count = Number(document.getElementById("count").innerText);
        // document.getElementById("count").innerText = count + 1 

        setCount(++count)
    }
    
    return (
        <div>
            <div id="count">{count}</div>
            <button type="button" onClick={onClickCount}>클릭하세요</button>
        </div>
    )
}