import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD } from "./BoardWrite.queries"

export default function BoardWrite() {
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [sampleGraphql] = useMutation(CREATE_BOARD)

    const onClickSubmit = async () => {
        const result = await sampleGraphql({
            variables: {                            //variables = $ 역할을 함
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
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
            onClickSubmit={onClickSubmit}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
        />
    )
}