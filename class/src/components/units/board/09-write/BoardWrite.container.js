import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import { useRouter } from "next/router"

export default function BoardWrite({isEdit, data}) {
    const router = useRouter()
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const onClickUpdate = async() => {
        //1. 불러온 값을 state 초기값으로 넣어주기
        //2. mutation에 수정된 값만 보내기 => 이 방법으로
        const variables = {
            number: Number(router.query.number)
        }
        if(writer) variables.writer = writer
        if(title) variables.title = title
        if(contents) variables.contents = contents

        try {
            const result = await updateBoard({
                variables: variables
            })
    
            router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`)
        } catch(error) {
            alert(error)
        }
    }

    const onClickSubmit = async() => {
        try {
            const result = await createBoard({
                variables: {                 
                    writer: writer,
                    title: title,
                    contents: contents
                }
            })
            router.push(`/section09/09-03-boards/${result.data.createBoard.number}`)
        } catch(error) {
            alert(error)
        }
    }  

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return (
        <BoardWriteUI 
            onClickUpdate={onClickUpdate}
            onClickSubmit={onClickSubmit}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            isEdit={isEdit}
            data={data} //undefined(등록) or data(수정)
        />
    )
}