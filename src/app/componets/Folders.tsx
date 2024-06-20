import { SuperTag} from "@/app//model/SuperTag"
import { useState } from "react";
import { useContext} from "react";
import SelectedSuperTagContext from "../context/SelectedSuperTagContext";

import { IconChevronDown, IconChevronRight, IconFolder} from "@tabler/icons-react"
import RenderFolderFiles from "@/app/componets/RenderFolderFiles";

export default function Folders(props:SuperTag){
    const {id_tag,nom_tag,url_icon} = props
    
    const selectedSuperTagContext = useContext(SelectedSuperTagContext)
    const {setSelected} = selectedSuperTagContext

    function openFolder(){
        !open && setSelected(props)
        setOpen(!open)
    }

    const [open,setOpen] = useState(false)

    return (
        <div className="flex flex-col gap-2 text-white" > 
            <div className="flex  gap-2" onClick={()=> openFolder()}>
                {open ? <IconChevronDown/> : <IconChevronRight/>  }
                {url_icon ? <img src={`${url_icon}`} width="30" height="30"/> :  <IconFolder /> } 

                <div>{nom_tag}</div>
            </div>
            <div>
                {open && <RenderFolderFiles fatherId={id_tag}/>  }
            </div>
        </div>
    )
}

