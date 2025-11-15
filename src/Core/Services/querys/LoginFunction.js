import { useQuery } from "@tanstack/react-query"
import { Key } from "./LoginKey"
import { Request } from "./Login/api"

export const LoginUser = () => {
    const result = useQuery({
        queryKey: Key,
        queryFn: () => Request()
    })
    return result
}