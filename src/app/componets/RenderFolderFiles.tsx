
import { SuperTags, SuperTag } from "@/app//model/SuperTag"
import { useContext, useEffect, useState } from "react";
import SuperTagsListContext from "@/app/context/SuperTagsContext";
import LoginContext from "../context/loginContext";
import { redirect } from 'next/navigation'
import Folders from "./Folders";
import Files from "./Files";

interface RenderFolderFilesProps {
    fatherId: number | null
}

export default function RenderFolderFiles({ fatherId }: RenderFolderFilesProps) {

    const [superTagListSelected, setSuperTagListSelected] = useState<SuperTags>([])

    const superTagsList = useContext(SuperTagsListContext)
    const userData = useContext(LoginContext)

    useEffect(() => {
        const withOutFather = superTagsList.filter(tag => (tag.id_tag_pai === fatherId));
        setSuperTagListSelected(withOutFather)
    }, [superTagsList])

    useEffect(() => {
        userData ?? redirect('/')
    }, [userData])

    function renderFolder(tag: SuperTag): JSX.Element {
        return <Folders id_tag={tag.id_tag} nom_tag={tag.nom_tag} url_icon={tag.url_icon} id_tag_pai={tag.id_tag_pai} idt_folder_file={tag.idt_folder_file} />
    }

    function renderFile(tag: SuperTag): JSX.Element {
        return <Files id_tag={tag.id_tag} nom_tag={tag.nom_tag} url_icon={tag.url_icon} id_tag_pai={tag.id_tag_pai} idt_folder_file={tag.idt_folder_file} />
    }

    const renderList = superTagListSelected.map((item) =>
        <li className="flex  items-center w-full gap-4  px-2 " key={item.id_tag + item.nom_tag}>
                <div className="flex  ">
                    {item.idt_folder_file == 1 ? renderFolder(item) : renderFile(item)}
                </div>
        </li>)

    return (
        <ul className="flex flex-col w-full text-white gap-2">
            {superTagListSelected ? superTagListSelected.length > 0 ? renderList : <li className="w-[328px] ml-[32px]">---</li> : <li>Processando</li>}
        </ul>

    )
}

