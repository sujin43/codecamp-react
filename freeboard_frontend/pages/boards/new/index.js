import { useForm } from "react-hook-form"
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
  SubmitButton,
  ErrorText
} from "../../../styles/boardsNew"

export default function BoardsNewPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => alert("등록이 완료되었습니다.")

  return (
    <Wrapper>
      <PageTitle>게시물 등록</PageTitle>
      <FormsWrapper onSubmit={handleSubmit(onSubmit)}>
        <FormRowWrapper>
          <InputWrapper>
            <FormLabel>작성자</FormLabel>
            <FormInput
              {...register("name", { required: true })}
              type="text"
              placeholder="이름을 적어주세요."
            />
            {errors.name?.type === "required" && <ErrorText>이름을 입력해주세요.</ErrorText>}
          </InputWrapper>
          <InputWrapper>
            <FormLabel>비밀번호</FormLabel>
            <FormInput
              {...register("password", { required: true })}
              type="text"
              placeholder="비밀번호를 입력해주세요."
            />
            {errors.password?.type === "required" && (
              <ErrorText>비밀번호를 입력해주세요.</ErrorText>
            )}
          </InputWrapper>
        </FormRowWrapper>
        <InputWrapper>
          <FormLabel>제목</FormLabel>
          <FormInput
            {...register("title", { required: true })}
            type="text"
            placeholder="제목을 작성해주세요."
          />
          {errors.title?.type === "required" && <ErrorText>제목을 입력해주세요.</ErrorText>}
        </InputWrapper>
        <InputWrapper>
          <FormLabel>내용</FormLabel>
          <FormTextArea
            {...register("content", { required: true })}
            type="text"
            placeholder="내용을 작성해주세요."
          />
          {errors.content?.type === "required" && <ErrorText>내용을 입력해주세요.</ErrorText>}
        </InputWrapper>
        <InputWrapper>
          <FormLabel>주소</FormLabel>
          <ZipcodeWrapper>
            <ZipcodeInput
              {...register("zipcode", { required: false })}
              type="text"
              placeholder="07250"
            />
            <ZipcodeButton type="button">우편번호 검색</ZipcodeButton>
          </ZipcodeWrapper>
          <FormInput {...register("address1", { required: false })} type="text" />
          <FormInput {...register("address2", { required: false })} type="text" />
        </InputWrapper>
        <InputWrapper>
          <FormLabel>유튜브</FormLabel>
          <FormInput
            {...register("youtube", { required: false })}
            type="text"
            placeholder="링크를 복사해주세요."
          />
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
            <RadioLabel htmlFor="youtube">
              <Radiobutton
                {...register("main", { required: false })}
                type="radio"
                name="main"
                id="youtube"
                value="youtube"
              />
              유튜브
            </RadioLabel>
            <RadioLabel htmlFor="photo">
              <Radiobutton
                {...register("main", { required: false })}
                type="radio"
                name="main"
                id="photo"
                value="photo"
              />
              사진
            </RadioLabel>
          </RadioWrapper>
        </InputWrapper>
        <SubmitButton type="submit" value={"등록하기"} />
      </FormsWrapper>
    </Wrapper>
  )
}
