import { useForm, useWatch } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { CREATE_BOARD } from './BoardWrite.queries'
import { UPDATE_BOARD } from './BoardWrite.queries'
import BoardWriteUI from './BoardWrite.presenter'

export default function BoardWrite({ isEdit, data }) {
	const router = useRouter()
	const [createBoard] = useMutation(CREATE_BOARD)
	const [updateBoard] = useMutation(UPDATE_BOARD)
	const [isActive, setIsActive] = useState(false) //등록하기 버튼 활성화 여부

	const {
		control,
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onSubmit',
		defaultValues: {
			writer: data?.fetchBoard.writer,
			password: '',
			title: data?.fetchBoard.title,
			contents: data?.fetchBoard.contents
		}
	})

	const watchedValue = useWatch({
		name: ['writer', 'password', 'title', 'contents'],
		control
	})

	useEffect(() => {
		//필수 입력값이 다 입력돼야 등록하기 버튼 활성화
		watchedValue.every((value) => value !== '') ? setIsActive(true) : setIsActive(false)
	}, [watchedValue])

	const onClickUpdate = async (data) => {
		const updateBoardInput = {}
		if (data.title) updateBoardInput.title = data.title
		if (data.contents) updateBoardInput.contents = data.contents
		try {
			const result = await updateBoard({
				variables: {
					updateBoardInput,
					password: data.password,
					boardId: router.query.boardId
				}
			})
			console.log(result)
			router.push(`/boards/${result.data.updateBoard._id}`)
		} catch (error) {
			alert(error)
		}
	}

	const onClickSubmit = async (data) => {
		try {
			const result = await createBoard({
				variables: {
					createBoardInput: {
						writer: data.writer,
						password: data.password,
						title: data.title,
						contents: data.contents
					}
				}
			})
			console.log(result)
			router.push(`/boards/${result.data.createBoard._id}`)
		} catch (error) {
			alert(error)
		}
	}

	return (
		<BoardWriteUI
			isEdit={isEdit}
			register={register}
			handleSubmit={handleSubmit}
			errors={errors}
			onClickSubmit={onClickSubmit}
			onClickUpdate={onClickUpdate}
			isActive={isActive}
		/>
	)
}
