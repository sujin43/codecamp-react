import { forwardRef } from 'react'
import type { ForwardedRef } from 'react'
import RatingUI from './Rating.presenter'
import type { IRating } from './Rating.types'

const Rating = forwardRef((props: IRating, ref: ForwardedRef<HTMLInputElement>) => {
	return <RatingUI {...props} ref={ref} />
})

export default Rating
