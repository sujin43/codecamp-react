import {
  Search,
  SearchBtn,
  TitleWrapper,
  Title,
  ProfileWrapper,
  ProfileImg,
  ProfileName,
  Menus,
  MenuItem,
  DivideLine,
  ListWrapper,
  ListItem,
  ListItemCont,
  ListItemNumber,
  ListItemTitle,
  ListExpandBtn,
  Footer,
  FooterItem,
  FooterItemText
} from "../../styles/01/01-quize"

export default function QuizePage() {
  return (
    <div>
      <Search>
        <SearchBtn type="button">
          <span className="hidden">검색</span>
        </SearchBtn>
      </Search>
      <TitleWrapper>
        <Title>마이</Title>
        <ProfileWrapper>
          <ProfileImg src="../../images/profile.png" alt="프로필 사진" width={60} height={60} />
          <ProfileName>임정아</ProfileName>
        </ProfileWrapper>
      </TitleWrapper>
      <Menus>
        <MenuItem>공지사항</MenuItem>
        <MenuItem>이벤트</MenuItem>
        <MenuItem>FAQ</MenuItem>
        <MenuItem>Q&A</MenuItem>
      </Menus>
      <DivideLine></DivideLine>
      <ListWrapper>
        <ListItem>
          <ListItemCont>
            <ListItemNumber>Q. 01</ListItemNumber>
            <ListItemTitle>리뷰 작성은 어떻게 하나요?</ListItemTitle>
          </ListItemCont>
          <ListExpandBtn type="button">
            <span className="hidden">펼치기</span>
          </ListExpandBtn>
        </ListItem>
        <ListItem>
          <ListItemCont>
            <ListItemNumber>Q. 01</ListItemNumber>
            <ListItemTitle>리뷰 작성은 어떻게 하나요?</ListItemTitle>
          </ListItemCont>
          <ListExpandBtn type="button">
            <span className="hidden">펼치기</span>
          </ListExpandBtn>
        </ListItem>
        <ListItem>
          <ListItemCont>
            <ListItemNumber>Q. 01</ListItemNumber>
            <ListItemTitle>리뷰 작성은 어떻게 하나요?</ListItemTitle>
          </ListItemCont>
          <ListExpandBtn type="button">
            <span className="hidden">펼치기</span>
          </ListExpandBtn>
        </ListItem>
        <ListItem>
          <ListItemCont>
            <ListItemNumber>Q. 01</ListItemNumber>
            <ListItemTitle>리뷰 작성은 어떻게 하나요?</ListItemTitle>
          </ListItemCont>
          <ListExpandBtn type="button">
            <span className="hidden">펼치기</span>
          </ListExpandBtn>
        </ListItem>
        <ListItem>
          <ListItemCont>
            <ListItemNumber>Q. 01</ListItemNumber>
            <ListItemTitle>리뷰 작성은 어떻게 하나요?</ListItemTitle>
          </ListItemCont>
          <ListExpandBtn type="button">
            <span className="hidden">펼치기</span>
          </ListExpandBtn>
        </ListItem>
        <ListItem>
          <ListItemCont>
            <ListItemNumber>Q. 01</ListItemNumber>
            <ListItemTitle>리뷰 작성은 어떻게 하나요?</ListItemTitle>
          </ListItemCont>
          <ListExpandBtn type="button">
            <span className="hidden">펼치기</span>
          </ListExpandBtn>
        </ListItem>
      </ListWrapper>
      <Footer>
        <FooterItem>
          <FooterItemText iconName={"home"}>홈</FooterItemText>
        </FooterItem>
        <FooterItem>
          <FooterItemText iconName={"location"}>잇츠로드</FooterItemText>
        </FooterItem>
        <FooterItem>
          <FooterItemText iconName={"heart"}>마이찜</FooterItemText>
        </FooterItem>
        <FooterItem>
          <FooterItemText iconName={"mypage"}>마이</FooterItemText>
        </FooterItem>
      </Footer>
    </div>
  )
}
