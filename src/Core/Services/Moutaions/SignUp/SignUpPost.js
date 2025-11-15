import { Api } from "../../../Api/api"

export const SignUpPost = async (data) => {
    try {
        const response = await Api.post("/User", data)
        return response.data
    } catch (err) {
        console.error(err)
    }
}