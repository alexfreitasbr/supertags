import { createContext } from "react"
import { superTagsList } from "@/app/service/superTagList";

const SuperTagsListContext = createContext(superTagsList)
export default SuperTagsListContext

interface SuperTagsProviderProps {
    children: any
}

export function SuperTagsProvider({ children }: SuperTagsProviderProps) {
    return (
        <SuperTagsListContext.Provider value={superTagsList }>
            {children}
        </SuperTagsListContext.Provider>
    )
}

