import { useForm } from "react-hook-form"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import BoardWriteUI from "./BoardWrite.presenter"
import  { CREATE_BOARD } from "./BoardWrite.queries"

export default function BoardWrite() {

    const router = useRouter()
    const [createBoard] = useMutation(CREATE_BOARD)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

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
        />
    )

}