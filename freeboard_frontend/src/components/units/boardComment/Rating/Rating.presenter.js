import { forwardRef } from 'react'
import { StarButton } from './Rating.styles'

const RatingUI = forwardRef((props, ref) => {
	return <StarButton type='radio' {...props} ref={ref} className={props.activeClass} />
})

export default RatingUI
