import { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import BoardCommentWriteUI from './BoardCommentWrite.presenter'
import { CREATE_BOARD_COMMENT } from './BoardCommentWrite.queries'
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries'

export default function BoardCommentWrite() {
	const router = useRouter()
	const [disabled, setDisabled] = useState(false) //댓글등록 버튼
	const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset
	} = useForm()

	const watchedValue = useWatch({
		name: ['writer', 'password', 'rating', 'contents'],
		control
	})

	useEffect(() => {
		watchedValue.every((value) => value) ? setDisabled(false) : setDisabled(true)
	}, [watchedValue])

	const onSubmit = async (data) => {
		try {
			const result = await createBoardComment({
				variables: {
					boardId: router.query.boardId,
					createBoardCommentInput: {
						writer: data.writer,
						password: data.password,
						contents: data.contents,
						rating: parseFloat(data.rating)
					}
				},
				refetchQueries: [
					{
						query: FETCH_BOARD_COMMENTS,
						variables: { boardId: router.query.boardId }
					}
				]
			})
			reset() //form reset
		} catch (error) {
			alert(error)
		}
	}

	return (
		<BoardCommentWriteUI
			disabled={disabled}
			control={control}
			register={register}
			handleSubmit={handleSubmit}
			errors={errors}
			watch={watch}
			onSubmit={onSubmit}
		/>
	)
}
