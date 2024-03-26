export default function TypescriptPage() {
	// Typescript: 타입추론(처음에 들어간 값을 가지고 타입을 추론해 타입을 명시하지 않아도 오류)
	let aaa = '안녕하세요'
	aaa = 3 //Type 'number' is not assignable to type 'string'.ts(2322)

	// 타입명시
	let bbb: string = '반갑습니다'
	bbb = 10

	// 타입명시가 필요한 상황
	let ccc: number | string = 1000
	ccc = '1000원'

	// 숫자타입
	let ddd: number = 10

	// 불린타입
	let eee: boolean = true
	eee = false
	eee = 'false' //true 주의

	// 배열타입
	let fff: number[] = [1, 2, 3, 4, 5, '안녕']
	let ggg: string[] = ['철수', '영희', '맹구', 10]
	let hhh: (string | number)[] = ['철수', 10]

	// 객체타입
	interface IProfile {
		name: string
		age: number | string
		school: string
		hobby?: string //?: - 필수값 아님
	}
	const profile: IProfile = {
		name: '철수',
		age: 8,
		school: '초등학교',
	}
	profile.age = '8살'
	profile.hobby = '수영' //타입추론으로 불가능

	// 함수타입
	function add(num1: number, num2: number, unit: string): string {
		//(): type -> return 값에 대한 type 명시
		return num1 + num2 + unit
	}
	const result = add(1000, 2000, '원') //결과의 return type도 예측 가능

	const add2 = (num1: number, num2: number, unit: string): string => {
		//(): type -> return 값에 대한 type 명시
		return num1 + num2 + unit
	}
	const result2 = add2(1000, 2000, '원')

	// any타입: 가급적 자제(js와 동일)
	let qqq: any = '철수'
	qqq = 123
	qqq = true

	return <></>
}
