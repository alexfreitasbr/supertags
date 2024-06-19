
import Button from "@/app/componets/Button";
import { Supertags } from "@/app//model/SuperTag"
import { useContext, useEffect, useState } from "react";
import SuperTagsListContext from "@/app/context/SuperTagsContext";
import { IconFile, IconFolder} from "@tabler/icons-react"
import LoginContext from "../context/loginContext";
import { redirect } from 'next/navigation'


export default function  ListFolderFiles(){

    const [list, setList] = useState<Supertags>([])

    const superTagsList = useContext(SuperTagsListContext)
    const userData = useContext(LoginContext)

    useEffect(() => {
        setList(superTagsList)
    }, [superTagsList])

    useEffect(() => {
        userData ?? redirect('/')
    }, [userData])

      
    const renderList = superTagsList.map((item) =>
        <li className="flex  items-center w-full gap-4 text-white px-2 py-3 border-b-2 " key={item.id_tag + item.nom_tag}>
           
            <Button >
                <div className="flex  ">
                    { item.idt_folder_file == 1 ? <IconFolder /> : <IconFile /> }
                </div>
            </Button>
            {item.nom_tag}
        </li>)
    
    return (
        list ? <ul className="w-full bg-black">{renderList}</ul> : <div>sem lista</div>
    )
}

