import { useContext} from "react";
import SelectedSuperTagContext from "../context/SelectedSuperTagContext";
import { IconFolder, IconFile} from "@tabler/icons-react"


export default function Selected(){
    const selectedSuperTagContext = useContext(SelectedSuperTagContext)
    const {selected} = selectedSuperTagContext

    const renderContent = <div>
        <div>id:{selected.id_tag}</div>
        <div>nome:{selected.nom_tag}</div>
        {selected.url_icon ? <img src={`${selected.url_icon}`} width="90" height="90"/> : selected.idt_folder_file == 1 ? <IconFolder /> : <IconFile />} 
        <div>tipo:{selected.idt_folder_file}</div>
        <div>pai:{selected.id_tag_pai}</div>
    </div>

    return (
        <div className="flex flex-col gap-2 text-white" > 
            {selected.id_tag !== 0 ? renderContent  : <p>selecione algo</p> }
        </div>
    )
}

