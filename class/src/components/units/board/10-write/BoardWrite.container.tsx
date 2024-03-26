import { useMutation } from '@apollo/client'
import { useState, ChangeEvent } from 'react' //ctrl + i 하면 import 할 수 있는 것들 뜸
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { IBoardWriteProps, IVariables } from './BoardWrite.types'

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
	const router = useRouter()
	const [writer, setWriter] = useState('')
	const [title, setTitle] = useState('')
	const [contents, setContents] = useState('')

	const [createBoard] = useMutation(CREATE_BOARD)
	const [updateBoard] = useMutation(UPDATE_BOARD)

	const onClickUpdate = async () => {
		const variables: IVariables = {
			number: Number(router.query.number),
		}
		if (writer) variables.writer = writer
		if (title) variables.title = title
		if (contents) variables.contents = contents

		try {
			const result = await updateBoard({
				variables: variables,
			})

			router.push(`/section10/10-02-typescript-boards/${result.data.updateBoard.number}`)
		} catch (error) {
			alert(error)
		}
	}

	const onClickSubmit = async () => {
		try {
			const result = await createBoard({
				variables: {
					writer: writer,
					title: title,
					contents: contents,
				},
			})
			router.push(`/section10/10-02-typescript-boards/${result.data.createBoard.number}`)
		} catch (error) {
			alert(error)
		}
	}

	const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
		setWriter(event.target.value)
	}

	const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value)
	}

	const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
		setContents(event.target.value)
	}

	return (
		<BoardWriteUI
			onClickUpdate={onClickUpdate}
			onClickSubmit={onClickSubmit}
			onChangeWriter={onChangeWriter}
			onChangeTitle={onChangeTitle}
			onChangeContents={onChangeContents}
			isEdit={props.isEdit}
			data={props.data} //undefined(등록) or data(수정)
		/>
	)
}
