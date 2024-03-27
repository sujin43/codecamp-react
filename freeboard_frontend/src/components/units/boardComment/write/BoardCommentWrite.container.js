import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import BoardCommentWriteUI from './BoardCommentWrite.presenter'
import { CREATE_BOARD_COMMENT } from './BoardCommentWrite.queries'
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries'
import { useForm, useWatch } from 'react-hook-form'

export default function BoardCommentWrite() {
	const router = useRouter()
	const [isActive, setIsActive] = useState(false)

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		defaultValues: {
			writer: '',
			password: '',
			contents: ''
		}
	})

	const watchedValue = useWatch({
		name: ['writer', 'password', 'contents'],
		control
	})

	useEffect(() => {
		watchedValue.every((value) => value !== '') ? setIsActive(true) : setIsActive(false)
	}, [watchedValue])

	const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)

	const onSubmit = async (data) => {
		try {
			const result = await createBoardComment({
				variables: {
					boardId: router.query.boardId,
					createBoardCommentInput: {
						writer: data.writer,
						password: data.password,
						contents: data.contents,
						rating: data.rating
					}
				},
				refetchQueries: [
					{
						query: FETCH_BOARD_COMMENTS,
						variables: { boardId: router.query.boardId }
					}
				]
			})
		} catch (error) {
			alert(error)
		}
	}

	return (
		<BoardCommentWriteUI
			// writer={writer}
			// password={password}
			// contents={contents}
			// onChangeWriter={onChangeWriter}
			// onChangePassword={onChangePassword}
			// onChangeContents={onChangeContents}
			isActive={isActive}
			control={control}
			register={register}
			handleSubmit={handleSubmit}
			errors={errors}
			onSubmit={onSubmit}
		/>
	)
}
