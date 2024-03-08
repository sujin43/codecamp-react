import {
    Wrapper, 
    PageTitle, 
    FormsWrapper, 
    FormRowWrapper, 
    InputWrapper, 
    FormLabel, 
    FormInput, 
    FormTextArea, 
    ZipcodeWrapper,
    ZipcodeInput,
    ZipcodeButton,
    UploadWrapper,
    UploadButton,
    RadioWrapper,
    RadioLabel,
    Radiobutton,
    SubmitButton
} from "../../../styles/boardsNew"

export default function BoardsNewPage() {
    return (
        <Wrapper>
            <PageTitle>게시물 등록</PageTitle>
            <FormsWrapper>
                <FormRowWrapper>
                    <InputWrapper>
                        <FormLabel>작성자</FormLabel>
                        <FormInput type="text" placeholder="이름을 적어주세요." />
                    </InputWrapper>
                    <InputWrapper>
                        <FormLabel>비밀번호</FormLabel>
                        <FormInput type="text" placeholder="비밀번호를 입력해주세요." />
                    </InputWrapper>
                </FormRowWrapper>
                <InputWrapper>
                    <FormLabel>제목</FormLabel>
                    <FormInput type="text" placeholder="제목을 작성해주세요." />
                </InputWrapper>
                <InputWrapper>
                    <FormLabel>내용</FormLabel>
                    <FormTextArea type="text" placeholder="내용을 작성해주세요." />
                </InputWrapper>
                <InputWrapper>
                    <FormLabel>주소</FormLabel>
                    <ZipcodeWrapper>
                        <ZipcodeInput type="text" placeholder="07250"/>
                        <ZipcodeButton type="button">우편번호 검색</ZipcodeButton>
                    </ZipcodeWrapper>
                    <FormInput type="text" />
                    <FormInput type="text" />
                </InputWrapper>
                <InputWrapper>
                    <FormLabel>유튜브</FormLabel>
                    <FormInput type="text"  placeholder="링크를 복사해주세요."/>
                </InputWrapper>
                <InputWrapper>
                    <FormLabel>사진 첨부</FormLabel>
                    <UploadWrapper>
                        <UploadButton type="button">Upload</UploadButton>
                        <UploadButton type="button">Upload</UploadButton>
                        <UploadButton type="button">Upload</UploadButton>
                    </UploadWrapper>
                </InputWrapper>
                <InputWrapper>
                    <FormLabel>메인 설정</FormLabel>
                    <RadioWrapper>
                        <RadioLabel for="youtube">
                            <Radiobutton type="radio" name="main" id="youtube" value="youtube" />
                            유튜브
                        </RadioLabel>
                        <RadioLabel for="photo">
                            <Radiobutton type="radio" name="main" id="photo" value="photo" />
                            사진
                        </RadioLabel>
                    </RadioWrapper>
                </InputWrapper>
            </FormsWrapper>
            <SubmitButton type="button">등록하기</SubmitButton>
        </Wrapper>
    )
}