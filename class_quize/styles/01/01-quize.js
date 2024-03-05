import styled from "@emotion/styled"

export const Search = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 36px 48px 32px;
`

export const SearchBtn = styled.button`
  width: 32px;
  height: 32px;
  background: url(../../icon/search.png) no-repeat center/32px 32px;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 58px;
`

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`

export const ProfileName = styled.button`
  margin-left: 18px;
  padding-right: 30px;
  background: url(../../icon/arrow_right.png) no-repeat center right/28px 28px;
  font-size: 24px;
  font-weight: 700;
  line-height: 35px;
`

export const Menus = styled.ul`
  display: flex;
  gap: 52px;
  padding: 42px 48px 50px;
`

export const MenuItem = styled.li`
  font-size: 30px;
  font-weight: 700;
  line-height: 43px;
  color: #cacaca;
`

export const DivideLine = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #cacaca;
`
export const ListWrapper = styled.ul`
  width: 100%;
  height: calc(100% - 96px);
  padding-bottom: 96px;
`

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 40px 25px 50px;
`

export const ListItemCont = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListItemNumber = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: #adadad;
`

export const ListItemTitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 35px;
  margin-top: 4px;
`

export const ListExpandBtn = styled.button`
  width: 60px;
  height: 60px;
  background: url(../../icon/arrow_down.png) no-repeat center/60px 60px;
`

export const Footer = styled.div`
  width: 100%;
  height: 96px;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dcdcdc;
  background-color: #fff;
  padding: 12px 0 8px;
`
export const FooterItem = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  text-align: center;
`

export const FooterItemText = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  color: #adadad;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto 23px auto;
    background-image: url(../../icon/${(props) => `${props.iconName}.png`});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
  }
`
