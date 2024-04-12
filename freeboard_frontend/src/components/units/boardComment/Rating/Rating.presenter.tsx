import { forwardRef } from 'react'
import type { ForwardedRef } from 'react'
import { StarButton } from './Rating.styles'
import type { IRating } from './Rating.types'

const RatingUI = forwardRef((props: IRating, ref: ForwardedRef<HTMLInputElement>) => {
	return <StarButton {...props} ref={ref} />
})

export default RatingUI
