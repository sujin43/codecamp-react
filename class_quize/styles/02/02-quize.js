import styled from "@emotion/styled"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 640px;
    height: auto;
    background: url(../02/bg.png) no-repeat top left/100%;
    padding: 224px 50px 84px;
`

export const Title = styled.h1`
    font-family: Noto Sans KR;
    font-size: 60px;
    font-weight: 700;
    line-height: 87px;
    color: #fff;
    padding-top: 123px;
    background: url(../02/icon_title.png) no-repeat top center/100px 100px;
`

export const FormsWrpper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 144px;
`

export const FormInnerWrapper = styled.div`
    width: 100%;
    position: relative;

    &:nth-child(2) {
        margin-top: 38px;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 42px;
    font-family: Noto Sans KR;
    font-size: 24px;
    font-weight: 400;
    line-height: 35px;
    color: #fff;
    border-bottom: 1px solid #7D7D7D;
`

export const DeleteBtn = styled.button`
    position: absolute;
    top: 11px;
    right: 0;
    width: 20px;
    height: 20px;
    background: url(../02/icon_input_delete.png) no-repeat right center/20px 20px;
`

export const ErrorMessage = styled.p`
    font-family: Noto Sans KR;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    color: #FF1B6D;
    margin-top: 5px;
`

export const LoginBtn = styled.button`
    width: 100%;
    height: 76px;
    background: rgba(255, 27, 109, 0.6);
    border-radius: 50px;
    font-family: Noto Sans KR;
    font-size: 26px;
    font-weight: 700;
    line-height: 38px;
    color: #fff;
    margin-top: 20px;
`

export const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 38px 0 58px;
`

export const TextBtn = styled.button`
    position: relative;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    color: #fff;

    & + & {
        padding-left: 63px;
        &:before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 33px;
            margin: auto;
            width: 2px;
            height: 20px;
            background-color: #9F9F9F;
        }
    }
`

export const KakaoLoginBtn = styled.button`
    width: 100%;
    height: 76px;
    border-radius: 50px;
    border: 2px solid #FAE100;
    font-family: Noto Sans KR;
    font-size: 26px;
    font-weight: 700;
    line-height: 38px;
    color: #FFE100;   
`