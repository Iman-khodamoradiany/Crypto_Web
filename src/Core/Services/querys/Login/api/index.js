import { Api } from "../../../../Api/api"

export const Request = async () => {
    try {
        const Responsive = await Api.get('/User')
        return Responsive.data
    } catch (error) {
        console.log(error)
    }
}