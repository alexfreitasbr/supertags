import { createContext, useState } from "react"
import { SuperTag  } from "@/app//model/SuperTag"
import { selectedSuperTagConstant } from "../constant/selectedSuperTagConstant"


const SelectedSuperTagContext= createContext({}as any)
export default SelectedSuperTagContext

interface selectedSuperTagProps {
    children: any
}

export function SelectedSuperTagProvider({ children }: selectedSuperTagProps) {

    const [selected, setSelected] = useState<SuperTag>(selectedSuperTagConstant)

    return (
        <SelectedSuperTagContext.Provider value={{ selected, setSelected}}>
            {children}
        </SelectedSuperTagContext.Provider>
    )
}