import { useForm, useWatch } from "react-hook-form"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import  { CREATE_BOARD } from "./BoardWrite.queries"
import BoardWriteUI from "./BoardWrite.presenter"

export default function BoardWrite() {

    const router = useRouter()
    const [createBoard] = useMutation(CREATE_BOARD)
    const [isActive, setIsActive] = useState(false) //등록하기 버튼 활성화 여부

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        defaultValues: {
            writer: "",
            password: "",
            title: "",
            contents: ""
        }
    })

    const watchedValue = useWatch({
        name: ["writer", "password", "title", "contents"],
        control
    }) 

    useEffect(() => { //필수 입력값이 다 입력돼야 등록하기 버튼 활성화
        watchedValue.every(value => value !== "") ? setIsActive(true) : setIsActive(false)
    }, [watchedValue])

    const onSubmit = async(data) => {
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
        } catch(error) {
            alert(error)
        }
    }

    return (
        <BoardWriteUI 
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            isActive={isActive}
        />
    )

}