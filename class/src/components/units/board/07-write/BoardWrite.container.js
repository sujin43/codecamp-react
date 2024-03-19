import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD } from "./BoardWrite.queries"

export default function BoardWrite() {
    const [isActive, setIsActive] = useState(false)

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

        
        if(event.target.value && title && contents) {
            setIsActive(true)
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)

        
        if(writer && event.target.value && contents) {
            setIsActive(true)
        }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
        
        if(writer && title && event.target.value) {
            setIsActive(true)
        }
    }

    return (
        <BoardWriteUI 
            isActive={isActive}
            onClickSubmit={onClickSubmit}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
        />
    )
}