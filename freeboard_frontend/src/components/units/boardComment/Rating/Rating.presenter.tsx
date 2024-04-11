import { ForwardedRef, forwardRef } from 'react'
import { StarButton } from './Rating.styles'
import { IRating } from './Rating.types'

const RatingUI = forwardRef((props: IRating, ref: ForwardedRef<HTMLInputElement>) => {
	return <StarButton {...props} ref={ref} />
})

export default RatingUI
