import { useState } from "react"
import {
     Wrapper,
     Title ,
     FormsWrpper,
     FormInnerWrapper,
     Input,
     DeleteBtn,
     ErrorMessage,
     LoginBtn,
     BtnWrapper,
     TextBtn,
     KakaoLoginBtn
} from "../../styles/02/02-quize"

//Section05 quize.4 - 회원가입
export default function EatsLoadPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailErrorText, setEmailErrorText] = useState("")
    const [pwErrorText, setPwErrorText] = useState("")

    function onChangeEmail(event) {
        let value = event.target.value
        setEmail(value)

        if(!value.includes("@") || value.length === 0) {
            setEmailErrorText("이메일 주소를 다시 확인해주세요.")
        }
        else {
            setEmailErrorText("")
        }
    }

    function onChangePassword(event) {
        let value = event.target.value
        setPassword(value)

        if(value.length >= 8 && value.length <= 16) {
            setPwErrorText("")
        } else {
            setPwErrorText("8-16자의 영문, 숫자, 특수문자만 사용 가능합니다.")
        }
    }

    function onClickClearInput(event) {
        if(event.target.id ==="email") {
            setEmail("")
        } else {
            setPassword("")
        }
    }

    function onClickLogin() {
        if(emailErrorText === ""  && pwErrorText === "") {
            alert("환영합니다.")
        }
    }
    
     return (
        <div>
            <Wrapper>
                <Title>잇츠로드</Title>
                <FormsWrpper>
                    <FormInnerWrapper>
                        <Input type="text" placeholder="이메일을 입력해주세요." value={email} onChange={onChangeEmail}/>
                        <DeleteBtn type="button" id="email" onClick={onClickClearInput}><span className="hidden">삭제</span></DeleteBtn>
                        <ErrorMessage>{emailErrorText}</ErrorMessage>
                    </FormInnerWrapper>
                    <FormInnerWrapper>
                        <Input type="password" placeholder="비밀번호를 입력해주세요." value={password} onChange={onChangePassword}/>
                        <DeleteBtn type="button" id="pw" onClick={onClickClearInput}><span className="hidden">삭제</span></DeleteBtn>
                        <ErrorMessage>{pwErrorText}</ErrorMessage>
                    </FormInnerWrapper>
                    <LoginBtn type="button" onClick={onClickLogin}>로그인</LoginBtn>
                </FormsWrpper>
                <BtnWrapper>
                    <TextBtn>이메일 찾기</TextBtn>
                    <TextBtn>비밀번호 찾기</TextBtn>
                    <TextBtn>회원가입</TextBtn>
                </BtnWrapper>
                <KakaoLoginBtn>카카오톡으로 로그인</KakaoLoginBtn>
            </Wrapper>
        </div>
    )
}