import styled from "@emotion/styled"

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid rgba(189, 189, 189, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 100px 100px;
  margin: 30px;
`

export const PageTitle = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 53px;
`

export const FormsWrapper = styled.form`
  width: 100%;
  margin: 40px 0 80px;
`

export const FormRowWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  justify-content: space-between;

  & > div {
    width: calc((100% - 24px) / 2);
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`

export const FormLabel = styled.span`
  display: block;
  margin-bottom: 16px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`

export const FormInput = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid rgba(189, 189, 189, 1);
  padding: 14px 16px;
`

export const FormTextArea = styled.textarea`
  width: 100%;
  height: 480px;
  border: 1px solid rgba(189, 189, 189, 1);
  padding: 14px 16px;
`

export const ZipcodeWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  margin: 16px 0;

  & + input + input {
    margin-top: 30px;
  }
`

export const ZipcodeInput = styled.input`
  width: 77px;
  height: 52px;
  padding: 14px 16px;
  border: 1px solid rgba(189, 189, 189, 1);
`

export const ZipcodeButton = styled.button`
  height: 52px;
  padding: 14px 16px;
  background-color: #000;
  color: #fff;
`

export const UploadWrapper = styled.div`
  display: flex;
  gap: 24px;
`

export const UploadButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 78px;
  height: 78px;
  position: relative;
  background: rgba(189, 189, 189, 1);
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: rgba(79, 79, 79, 1);
  padding-top: 42px;

  &:before {
    content: "";
    position: absolute;
    top: 18px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 24px;
    height: 24px;
    background: url(../icon_plus.png) no-repeat center/24px 24px;
  }
`

export const RadioWrapper = styled.div`
  display: flex;
  gap: 20px;
`

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`

export const Radiobutton = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 1);
  margin-right: 8px;
`

export const SubmitButton = styled.input`
  display: block;
  padding: 14px 60px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  background: rgba(255, 214, 0, 1);
  border: none;
  margin: 80px auto 0;
`

export const ErrorText = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-top: 4px;
  color: red;
`
