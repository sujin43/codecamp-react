const CLASSMATES = [
    { name: "철수", age: 10, school: "토끼초등학교" },
    { name: "영희", age: 13, school: "다람쥐초등학교" },
    { name: "훈이", age: 11, school: "토끼초등학교" },
]

const FRUITS = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
];

export default function QizePage() {
    /* quiz1. 토끼초등학교만 골라낸 후, candy: 10개씩 각각 추가 */
    const quiz1 = CLASSMATES.filter(el => el.school.includes("토끼")).map(el => ({...el, candy: 10}))

    /* quiz2. 다람쥐초등학교만 골라낸 후, name 뒤에 "어린이" 붙이기 */
    const quiz2 = CLASSMATES.filter(el => el.school.includes("다람쥐")).map(el => ({...el, name: el.name+"어린이"}))

    return (
        <div>
            {quiz1.map((el, index) => (
                <div key={index}>
                    name: {el.name}
                    age: {el.age}
                    school: {el.school}
                    candy: {el.candy}
                </div>
            ))}
            ============================================
            {quiz2.map((el, index) => (
                <div key={index}>
                    name: {el.name}
                    age: {el.age}
                    school: {el.school}
                </div>
            ))}
            ============================================
            {/* quiz3. FRUITS 배열에서 짝수인 것만 출력 */}
            {FRUITS.filter(el => (el.number%2) === 0).map(el => (
                <div key={el.number}>
                    {el.number}
                    {el.title}
                </div>
            ))}
        </div>
    )
}