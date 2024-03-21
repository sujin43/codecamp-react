import {
  Wrapper,
  Title,
  BestPostWrapper,
  BestPostItem,
  BestPostImg,
  BestPostContentsWrapper,
  BestPostContentsTitle,
  BestPostContentsInfo,
  BestPostContentsProfile,
  BestPostContentsWriter,
  BestPostContentsDate,
  GoodButton,
  SearchSection,
  SearchInput,
  DateInput,
  SearchButton
} from "@/styles/boardsList"

export default function BoardListPage() {
  return (
    <Wrapper>
      <Title>베스트 게시글</Title>
      <BestPostWrapper>
        <BestPostItem>
          <BestPostImg src="" alt="" />
          <BestPostContentsWrapper>
            <BestPostContentsTitle>게시물 제목입니다.</BestPostContentsTitle>
            <BestPostContentsInfo>
              <div>
                <BestPostContentsProfile>
                  <img
                    src="/images/img_profile_small.png"
                    alt="프로필이미지"
                    width={20}
                    height={20}
                  />
                  <BestPostContentsWriter>노원두</BestPostContentsWriter>
                </BestPostContentsProfile>
                <BestPostContentsDate>Date: 2021.02.18</BestPostContentsDate>
              </div>
              <GoodButton type="button">356</GoodButton>
            </BestPostContentsInfo>
          </BestPostContentsWrapper>
        </BestPostItem>
        <BestPostItem>
          <BestPostImg src="" alt="" />
          <BestPostContentsWrapper>
            <BestPostContentsTitle>게시물 제목입니다.</BestPostContentsTitle>
            <BestPostContentsInfo>
              <div>
                <BestPostContentsProfile>
                  <img
                    src="/images/img_profile_small.png"
                    alt="프로필이미지"
                    width={20}
                    height={20}
                  />
                  <BestPostContentsWriter>노원두</BestPostContentsWriter>
                </BestPostContentsProfile>
                <BestPostContentsDate>Date: 2021.02.18</BestPostContentsDate>
              </div>
              <GoodButton type="button">356</GoodButton>
            </BestPostContentsInfo>
          </BestPostContentsWrapper>
        </BestPostItem>
        <BestPostItem>
          <BestPostImg src="" alt="" />
          <BestPostContentsWrapper>
            <BestPostContentsTitle>게시물 제목입니다.</BestPostContentsTitle>
            <BestPostContentsInfo>
              <div>
                <BestPostContentsProfile>
                  <img
                    src="/images/img_profile_small.png"
                    alt="프로필이미지"
                    width={20}
                    height={20}
                  />
                  <BestPostContentsWriter>노원두</BestPostContentsWriter>
                </BestPostContentsProfile>
                <BestPostContentsDate>Date: 2021.02.18</BestPostContentsDate>
              </div>
              <GoodButton type="button">356</GoodButton>
            </BestPostContentsInfo>
          </BestPostContentsWrapper>
        </BestPostItem>
        <BestPostItem>
          <BestPostImg src="" alt="" />
          <BestPostContentsWrapper>
            <BestPostContentsTitle>게시물 제목입니다.</BestPostContentsTitle>
            <BestPostContentsInfo>
              <div>
                <BestPostContentsProfile>
                  <img
                    src="/images/img_profile_small.png"
                    alt="프로필이미지"
                    width={20}
                    height={20}
                  />
                  <BestPostContentsWriter>노원두</BestPostContentsWriter>
                </BestPostContentsProfile>
                <BestPostContentsDate>Date: 2021.02.18</BestPostContentsDate>
              </div>
              <GoodButton type="button">356</GoodButton>
            </BestPostContentsInfo>
          </BestPostContentsWrapper>
        </BestPostItem>
      </BestPostWrapper>
      <div>
        <SearchSection>
          <SearchInput type="text" placeholder="제목을 검색해주세요." />
          <DateInput type="text" placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />
          <SearchButton type="button">검색하기</SearchButton>
        </SearchSection>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5</td>
              <td>게시물 제목입니다.</td>
              <td>노원두</td>
              <td>2020.09.28</td>
            </tr>
            <tr>
              <td>4</td>
              <td>게시물 제목입니다.</td>
              <td>노원두</td>
              <td>2020.09.28</td>
            </tr>
            <tr>
              <td>3</td>
              <td>게시물 제목입니다.</td>
              <td>노원두</td>
              <td>2020.09.28</td>
            </tr>
            <tr>
              <td>2</td>
              <td>게시물 제목입니다.</td>
              <td>노원두</td>
              <td>2020.09.28</td>
            </tr>
            <tr>
              <td>1</td>
              <td>게시물 제목입니다.</td>
              <td>노원두</td>
              <td>2020.09.28</td>
            </tr>
          </tbody>
        </table>
        <div>
          <div>
            <button type="button">
              <span className="hidden">이전</span>
            </button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">
              <span className="hidden">다음</span>
            </button>
          </div>
          <button type="button">게시물 등록하기</button>
        </div>
      </div>
    </Wrapper>
  )
}
