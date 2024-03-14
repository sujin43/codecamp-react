import axios from "axios";

export default function RestApiPage() {

    const onClickRestApi = async() => {
        const result = await axios.get("https://koreanjson.com/users")
        console.log(result)
    }

    return <button type="button" onClick={onClickRestApi}>REST-API 요청하기</button>
}