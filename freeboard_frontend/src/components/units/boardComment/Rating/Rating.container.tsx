import { ForwardedRef, forwardRef } from 'react'
import RatingUI from './Rating.presenter'
import { IRating } from './Rating.types'

const Rating = forwardRef((props: IRating, ref: ForwardedRef<HTMLInputElement>) => {
	return <RatingUI {...props} ref={ref} />
})

export default Rating
