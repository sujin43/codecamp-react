export interface IProfile {
	name: string
	age: number
	school: string
	hobby?: string
}

// 1. Partial 타입
type partial = Partial<IProfile>

// interface IProfile2 {
// 	name?: string
// 	age?: number
// 	school?: string
// 	hobby?: string
// } 이렇게  유사한 걸 또 만들지 않아도 Partial 타입을 사용하면 됨

// 2. Required 타입
type required = Required<IProfile>

// interface IProfile2 {
// 	name: string
// 	age: number
// 	school: string
// 	hobby: string
// } 물음표 하나 지우기 위해 전체를 새로 만들 필요없이 Required utility type 사용

// 3. Pick 타입 => 선언된 타입에서 원하는 요소만 선택
type pick = Pick<IProfile, 'name' | 'age'>

// 4. Omit 타입 => 선언된 타입에서 원하는 요소만 제거
type omit = Omit<IProfile, 'school'>

//5. Record 타입
type union = '철수' | '영희' | '훈이' //Union 타입(타입 합친 것)
type record = Record<union, IProfile> //Record<key, value>
// type record {
//   철수: IProfile
//   영희: IProfile
//   훈이: IProfile
// } 와 동일

// 6. 객체의 key들로 Union타입 만들기
type tounion = keyof IProfile //"name" | "age" | "school" | "hobby"
let myprofile: tounion = 'hobby'

// 7. type vs interface => 선언병합
//interface
export interface IProfile {
	candy: number //선언병합으로 기존 IProfile 타입에 추가됨
}
//type은 선언병합 불가능

// 8. 응용
let profile: Partial<IProfile> = {
	candy: 10,
}
