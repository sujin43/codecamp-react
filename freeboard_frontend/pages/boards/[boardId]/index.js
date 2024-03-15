import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"
import {
    Wrapper,
    ContentWrapper,
    Header,
    WriterWrapper,
    WriteInfo,
    Writer,
    Date,
    FileButton,
    LocationButton,
    Contents,
    Title,
    ContentImg,
    Content,
    Video,
    ButtonWrapper,
    GoodButton,
    BadButton,
    BoardButton,
    CommentsWrapper,
    CommentInputSection,
    CommentTitle,
    WriterInfoInputs,
    WriterInfoInput,
    CommentInputWrapper,
    CommentInput,
    CommentInputAction, 
    CommentLengthCount,
    CommentButton,
    StarButtonWrapper,
    StarButton,
    CommentListWrapper,
    CommentListItem,
    CommentContentWrapper,
    CommentContentsTop,
    CommentWriter,
    CommentContent,
    CommentDate,
    CommentActionButtons,
    ModifyButton,
    DeleteButton
} from "../../../styles/boardsDetail"

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            writer
            title
            contents
        }        
    }
`

export default function BoardDetailPage() {
    const router = useRouter()
    const boardId = router.query.boardId
    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId
        }
    })

    return (
        <Wrapper>
            <ContentWrapper>
                <Header>
                    <WriterWrapper>
                        <img src="../../../images/img_profile.png" width={56} height={56} alt="프로필 사진"/>
                        <WriteInfo>
                            <Writer>{data?.fetchBoard?.writer}</Writer>
                            <Date>Date: 2021.02.18</Date>
                        </WriteInfo>
                    </WriterWrapper>
                    <div>
                        <FileButton type="button"><span className="hidden">첨부파일</span></FileButton>
                        <LocationButton type="button"><span className="hidden">위치정보</span></LocationButton>
                    </div>
                </Header>
                <Contents>
                    <Title>{data?.fetchBoard?.title}</Title>
                    <ContentImg>
                        <img src="" alt="" />
                    </ContentImg>
                    <Content>{data?.fetchBoard?.contents}</Content>
                    <Video></Video>
                    <ButtonWrapper>
                        <GoodButton type="button"><span>1920</span></GoodButton>
                        <BadButton type="button"><span>1920</span></BadButton>
                    </ButtonWrapper>
                </Contents>
            </ContentWrapper>
            <ButtonWrapper>
                <BoardButton type="button">목록으로</BoardButton>
                <BoardButton type="button">수정하기</BoardButton>
                <BoardButton type="button">삭제하기</BoardButton>
            </ButtonWrapper>
            <CommentsWrapper>
                <CommentInputSection>
                    <CommentTitle> 댓글</CommentTitle>
                    <WriterInfoInputs>
                        <WriterInfoInput type="text" placeholder="작성자"/>
                        <WriterInfoInput type="password" placeholder="비밀번호"/>
                        <StarButtonWrapper>
                            <StarButton type="button"><span className="hidden">별점</span></StarButton>
                            <StarButton type="button"><span className="hidden">별점</span></StarButton>
                            <StarButton type="button"><span className="hidden">별점</span></StarButton>
                            <StarButton type="button"><span className="hidden">별점</span></StarButton>
                            <StarButton type="button"><span className="hidden">별점</span></StarButton>
                        </StarButtonWrapper>
                    </WriterInfoInputs>
                    <CommentInputWrapper>
                        <CommentInput placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></CommentInput>
                        <CommentInputAction>
                            <CommentLengthCount>0/100</CommentLengthCount>
                            <CommentButton type="button">등록하기</CommentButton>
                        </CommentInputAction>
                    </CommentInputWrapper>
                </CommentInputSection>
                <CommentListWrapper>
                    <CommentListItem>
                        <CommentContentWrapper>
                            <img src="../../../images/img_profile.png" width={40} height={40} alt="프로필 사진" />
                            <div>
                                <CommentContentsTop>
                                    <CommentWriter>노원두</CommentWriter>
                                    <StarButtonWrapper>
                                        <StarButton type="button"><span className="hidden">별점</span></StarButton>
                                        <StarButton type="button"><span className="hidden">별점</span></StarButton>
                                        <StarButton type="button"><span className="hidden">별점</span></StarButton>
                                        <StarButton type="button"><span className="hidden">별점</span></StarButton>
                                        <StarButton type="button"><span className="hidden">별점</span></StarButton>
                                    </StarButtonWrapper>
                                </CommentContentsTop>
                                <CommentContent>진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!</CommentContent>
                                <CommentDate>2021.02.22</CommentDate>
                            </div>
                        </CommentContentWrapper>
                        <CommentActionButtons>
                            <ModifyButton type="button"><span className="hidden">수정</span></ModifyButton>
                            <DeleteButton type="button"><span className="hidden">삭제</span></DeleteButton>
                        </CommentActionButtons>
                    </CommentListItem>
                    <CommentListItem>
                        <CommentContentWrapper>
                            <img src="../../../images/img_profile.png" width={40} height={40} alt="프로필 사진" />
                            <div>
                                <CommentContentsTop>
                                    <CommentWriter>노원두</CommentWriter>
                                    <StarButtonWrapper>
                                        <StarButton type="button"><span className="hidden">별점</span></StarButton>
                                        <StarButton type="button"><span className="hidden">별점</span></StarButton>
                                        <StarButton type="button"><span className="hidden">별점</span></StarButton>
                                        <StarButton type="button"><span className="hidden">별점</span></StarButton>
                                        <StarButton type="button"><span className="hidden">별점</span></StarButton>
                                    </StarButtonWrapper>
                                </CommentContentsTop>
                                <CommentContent>진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!</CommentContent>
                                <CommentDate>2021.02.22</CommentDate>
                            </div>
                        </CommentContentWrapper>
                        <CommentActionButtons>
                            <ModifyButton type="button"><span className="hidden">수정</span></ModifyButton>
                            <DeleteButton type="button"><span className="hidden">삭제</span></DeleteButton>
                        </CommentActionButtons>
                    </CommentListItem>
                    <CommentListItem>
                        <CommentContentWrapper>
                            <img src="../../../images/img_profile.png" width={40} height={40} alt="프로필 사진" />
                            <div>
                                <CommentContentsTop>
                                    <CommentWriter>노원두</CommentWriter>
                                    <StarButtonWrapper>
                                        <StarButton type="button"><span className="hidden">별점</span></StarButton>
                                        <StarButton type="button"><span className="hidden">별점</span></StarButton>
                                        <StarButton type="button"><span className="hidden">별점</span></StarButton>
                                        <StarButton type="button"><span className="hidden">별점</span></StarButton>
                                        <StarButton type="button"><span className="hidden">별점</span></StarButton>
                                    </StarButtonWrapper>
                                </CommentContentsTop>
                                <CommentContent>진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!</CommentContent>
                                <CommentDate>2021.02.22</CommentDate>
                            </div>
                        </CommentContentWrapper>
                        <CommentActionButtons>
                            <ModifyButton type="button"><span className="hidden">수정</span></ModifyButton>
                            <DeleteButton type="button"><span className="hidden">삭제</span></DeleteButton>
                        </CommentActionButtons>
                    </CommentListItem>
                </CommentListWrapper>
            </CommentsWrapper>
        </Wrapper>
    )

}