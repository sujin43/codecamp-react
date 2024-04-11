import { IBoardCommnetWrite } from '../write/BoardCommentWrite.types'

export interface IRating {
	type: 'radio'
	key: number
	value: number
	index: number
	className: string
}
