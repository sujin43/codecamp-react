import { forwardRef } from 'react'
import RatingUI from './Rating.presenter'

const Rating = forwardRef((props, ref) => {
	return <RatingUI {...props} ref={ref} activeClass={props.activeClass} />
})

export default Rating
