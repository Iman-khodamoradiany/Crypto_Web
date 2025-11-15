import { useMutation } from "@tanstack/react-query"
import { SignUpPost } from "./SignUpPost"

export const SendData = () => {
    const Result = useMutation({
        mutationFn: (data) => SignUpPost(data)
    })
    return Result
}