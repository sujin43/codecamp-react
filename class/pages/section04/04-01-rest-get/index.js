import axios from "axios"

export default function RestGetPage(){
    
    function onClickAsync() { //비동기
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log(result) //Promise
    }

    // async function onClickSync() { => 함수 중복 선언 문제
    //     const result = await axios.get("https://koreanjson.com/posts/1")
    //     console.log(result)
    // }

    const onClickSync = async () =>  { //동기
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result)
    }

    return(
        <div>
            <button onClick={onClickAsync}>REST-API(비동기) 요청</button>
            <button onClick={onClickSync}>REST-API(동기) 요청</button>
        </div>
    )
}