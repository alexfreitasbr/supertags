import { createContext } from "react"
import { user } from "@/app/service/user";

const LoginContext = createContext(user)
export default LoginContext

interface LoginProviderProps {
    children: any
}

export function LoginProvider({ children }: LoginProviderProps) {
    return (
        <LoginContext.Provider value={user }>
            {children}
        </LoginContext.Provider>
    )
}
