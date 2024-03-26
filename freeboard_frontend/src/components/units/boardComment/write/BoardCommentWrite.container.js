import { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import BoardCommentWriteUI from './BoardCommentWrite.presenter'
import { CREATE_BOARD_COMMENT } from './BoardCommentWrite.queries'
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries'

export default function BoardCommentWrite() {
	const router = useRouter()

	const [writer, setWriter] = useState('')
	const [password, setPassword] = useState('')
	const [contents, setContents] = useState('')

	const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)

	const onChangeWriter = (event) => {
		setWriter(event.target.value)
	}

	const onChangePassword = (event) => {
		setPassword(event.target.value)
	}

	const onChangeContents = (event) => {
		setContents(event.target.value)
	}

	const onSubmit = async () => {
		const result = await createBoardComment({
			variables: {
				boardId: router.query.boardId,
				createBoardCommentInput: {
					writer,
					password,
					contents,
					rating: 4.0
				}
			},
			refetchQueries: [
				{
					query: FETCH_BOARD_COMMENTS,
					variables: { boardId: router.query.boardId }
				}
			]
		})

		console.log(result)
	}

	return (
		<BoardCommentWriteUI
			onChangeWriter={onChangeWriter}
			onChangePassword={onChangePassword}
			onChangeContents={onChangeContents}
			onSubmit={onSubmit}
		/>
	)
}
