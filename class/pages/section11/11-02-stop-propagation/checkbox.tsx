import { MouseEvent } from 'react'

export default function Checkbox() {
	const onClick2 = (event: MouseEvent<HTMLSpanElement>) => {
		alert('2번 클릭')
	}
	const onClick3 = (event: MouseEvent<HTMLInputElement>) => {
		event.stopPropagation()
		alert('3번 클릭')
	}

	return (
		<span onClick={onClick2}>
			<input type="checkbox" onClick={onClick3} />
		</span>
	)
}
