//command + i: import 할 수 있는 컴포넌트 자동완성
import { MyEmail, MyEmailInput } from "../../../styles/01-02-emotion"

export default function EmotionPage() {
  //public 경로: /
  return (
    <div>
      <MyEmail>이메일: </MyEmail>
      <MyEmailInput type="text" />
      <button>클릭하세요</button>
      <img src="/next.svg" alt="" />
    </div>
  )
}
