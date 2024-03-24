import * as S from "./BoardDetail.styles"

export default function BoardDetailUI({ data, onClickDelete, onClickEdit }) {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Header>
          <S.WriterWrapper>
            <img src="../../../images/img_profile.png" width={56} height={56} alt="프로필 사진" />
            <S.WriteInfo>
              <S.Writer>{data?.fetchBoard?.writer}</S.Writer>
              <S.Date>Date: 2021.02.18</S.Date>
            </S.WriteInfo>
          </S.WriterWrapper>
          <div>
            <S.FileButton type="button">
              <span className="hidden">첨부파일</span>
            </S.FileButton>
            <S.LocationButton type="button">
              <span className="hidden">위치정보</span>
            </S.LocationButton>
          </div>
        </S.Header>
        <S.Contents>
          <S.Title>{data?.fetchBoard?.title}</S.Title>
          <S.ContentImg>
            <img src="" alt="" />
          </S.ContentImg>
          <S.Content>{data?.fetchBoard?.contents}</S.Content>
          <S.Video></S.Video>
          <S.ButtonWrapper>
            <S.GoodButton type="button">
              <span>1920</span>
            </S.GoodButton>
            <S.BadButton type="button">
              <span>1920</span>
            </S.BadButton>
          </S.ButtonWrapper>
        </S.Contents>
      </S.ContentWrapper>
      <S.ButtonWrapper>
        <S.BoardButton type="button">목록으로</S.BoardButton>
        <S.BoardButton type="button" onClick={onClickEdit}>
          수정하기
        </S.BoardButton>
        <S.BoardButton type="button" onClick={onClickDelete}>
          삭제하기
        </S.BoardButton>
      </S.ButtonWrapper>
      <S.CommentsWrapper>
        <S.CommentInputSection>
          <S.CommentTitle> 댓글</S.CommentTitle>
          <S.WriterInfoInputs>
            <S.WriterInfoInput type="text" placeholder="작성자" />
            <S.WriterInfoInput type="password" placeholder="비밀번호" />
            <S.StarButtonWrapper>
              <S.StarButton type="button">
                <span className="hidden">별점</span>
              </S.StarButton>
              <S.StarButton type="button">
                <span className="hidden">별점</span>
              </S.StarButton>
              <S.StarButton type="button">
                <span className="hidden">별점</span>
              </S.StarButton>
              <S.StarButton type="button">
                <span className="hidden">별점</span>
              </S.StarButton>
              <S.StarButton type="button">
                <span className="hidden">별점</span>
              </S.StarButton>
            </S.StarButtonWrapper>
          </S.WriterInfoInputs>
          <S.CommentInputWrapper>
            <S.CommentInput placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." />
            <S.CommentInputAction>
              <S.CommentLengthCount>0/100</S.CommentLengthCount>
              <S.CommentButton type="button">등록하기</S.CommentButton>
            </S.CommentInputAction>
          </S.CommentInputWrapper>
        </S.CommentInputSection>
        <S.CommentListWrapper>
          <S.CommentListItem>
            <S.CommentContentWrapper>
              <img src="../../../images/img_profile.png" width={40} height={40} alt="프로필 사진" />
              <div>
                <S.CommentContentsTop>
                  <S.CommentWriter>노원두</S.CommentWriter>
                  <S.StarButtonWrapper>
                    <S.StarButton type="button">
                      <span className="hidden">별점</span>
                    </S.StarButton>
                    <S.StarButton type="button">
                      <span className="hidden">별점</span>
                    </S.StarButton>
                    <S.StarButton type="button">
                      <span className="hidden">별점</span>
                    </S.StarButton>
                    <S.StarButton type="button">
                      <span className="hidden">별점</span>
                    </S.StarButton>
                    <S.StarButton type="button">
                      <span className="hidden">별점</span>
                    </S.StarButton>
                  </S.StarButtonWrapper>
                </S.CommentContentsTop>
                <S.CommentContent>
                  진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!
                </S.CommentContent>
                <S.CommentDate>2021.02.22</S.CommentDate>
              </div>
            </S.CommentContentWrapper>
            <S.CommentActionButtons>
              <S.ModifyButton type="button">
                <span className="hidden">수정</span>
              </S.ModifyButton>
              <S.DeleteButton type="button">
                <span className="hidden">삭제</span>
              </S.DeleteButton>
            </S.CommentActionButtons>
          </S.CommentListItem>
          <S.CommentListItem>
            <S.CommentContentWrapper>
              <img src="../../../images/img_profile.png" width={40} height={40} alt="프로필 사진" />
              <div>
                <S.CommentContentsTop>
                  <S.CommentWriter>노원두</S.CommentWriter>
                  <S.StarButtonWrapper>
                    <S.StarButton type="button">
                      <span className="hidden">별점</span>
                    </S.StarButton>
                    <S.StarButton type="button">
                      <span className="hidden">별점</span>
                    </S.StarButton>
                    <S.StarButton type="button">
                      <span className="hidden">별점</span>
                    </S.StarButton>
                    <S.StarButton type="button">
                      <span className="hidden">별점</span>
                    </S.StarButton>
                    <S.StarButton type="button">
                      <span className="hidden">별점</span>
                    </S.StarButton>
                  </S.StarButtonWrapper>
                </S.CommentContentsTop>
                <S.CommentContent>
                  진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!
                </S.CommentContent>
                <S.CommentDate>2021.02.22</S.CommentDate>
              </div>
            </S.CommentContentWrapper>
            <S.CommentActionButtons>
              <S.ModifyButton type="button">
                <span className="hidden">수정</span>
              </S.ModifyButton>
              <S.DeleteButton type="button">
                <span className="hidden">삭제</span>
              </S.DeleteButton>
            </S.CommentActionButtons>
          </S.CommentListItem>

          <S.CommentListItem>
            <S.CommentContentWrapper>
              <img src="../../../images/img_profile.png" width={40} height={40} alt="프로필 사진" />
              <div>
                <S.CommentContentsTop>
                  <S.CommentWriter>노원두</S.CommentWriter>
                  <S.StarButtonWrapper>
                    <S.StarButton type="button">
                      <span className="hidden">별점</span>
                    </S.StarButton>
                    <S.StarButton type="button">
                      <span className="hidden">별점</span>
                    </S.StarButton>
                    <S.StarButton type="button">
                      <span className="hidden">별점</span>
                    </S.StarButton>
                    <S.StarButton type="button">
                      <span className="hidden">별점</span>
                    </S.StarButton>
                    <S.StarButton type="button">
                      <span className="hidden">별점</span>
                    </S.StarButton>
                  </S.StarButtonWrapper>
                </S.CommentContentsTop>
                <S.CommentContent>
                  진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!
                </S.CommentContent>
                <S.CommentDate>2021.02.22</S.CommentDate>
              </div>
            </S.CommentContentWrapper>
            <S.CommentActionButtons>
              <S.ModifyButton type="button">
                <span className="hidden">수정</span>
              </S.ModifyButton>
              <S.DeleteButton type="button">
                <span className="hidden">삭제</span>
              </S.DeleteButton>
            </S.CommentActionButtons>
          </S.CommentListItem>
        </S.CommentListWrapper>
      </S.CommentsWrapper>
    </S.Wrapper>
  )
}
