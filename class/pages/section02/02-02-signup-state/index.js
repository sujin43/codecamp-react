import { useState } from 'react'

export default function SignupStatePage() {
    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")

    function onChangeEmail(event) { //on으로 바인딩 된 함수는 event 사용 가능 => 이벤트 핸들러 함수
        setEmail(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function onClickSignup(event) {

        console.log(email)
        console.log(password)

        //1. 검증
        if(!email.includes("@")) {
            setEmailError("이메일이 올바르지 않습니다.")
        } else {
            //2. 백엔드로 전송
            //3. 성공 알림 보여주기
            alert("회원가입을 축하합니다.")
        }

        
    }
    
    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail}/>
            <div>{emailError}</div>
            비밀번호: <input type="password"  onChange={onChangePassword}/>
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}