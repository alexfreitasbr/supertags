import { SuperTag} from "@/app//model/SuperTag"
import { useState } from "react";
import { useContext} from "react";
import SelectedSuperTagContext from "../context/SelectedSuperTagContext";
import { IconChevronDown, IconChevronRight, IconFile} from "@tabler/icons-react"

export default function Files(props:SuperTag){
    const {id_tag,nom_tag,url_icon} = props

    const selectedSuperTagContext = useContext(SelectedSuperTagContext)
    const {setSelected} = selectedSuperTagContext


    const [open,setOpen] = useState(false)

    function openFile(){
        !open && setSelected(props)
        setOpen(!open)
    }


    return (
        <div className="flex flex-col gap-2 text-white" > 
            <div className="flex  gap-2" onClick={()=> openFile()}>
                {open ? <IconChevronDown/> : <IconChevronRight/>  }
                {url_icon ? <img src={`${url_icon}`} width="30" height="30"/> :  <IconFile />} 
                <div>{nom_tag}</div>
            </div>
        </div>
    )
}

