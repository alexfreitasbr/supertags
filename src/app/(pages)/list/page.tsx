'use client'                                        // importante para o next conseguir importa
import { useContext, useEffect, useState } from "react";

import Button from "@/app/componets/Button";
import { IconFolderPlus, IconHomeBolt} from "@tabler/icons-react"
import {SuperTagsProvider} from "@/app/context/SuperTagsContext";
import ListFolderFiles from "@/app/componets/ListFolderFiles";


export default function List() {

    return (
        <div className="w-full">
            <SuperTagsProvider >
                <ListFolderFiles />
            </SuperTagsProvider>
            <div className="flex justify-center w-full my-5">
                <Button>
                    <div className="flex justify-center items-center gap-2"><IconFolderPlus />
                        Adicionar
                    </div>
                </Button>
            </div>

            <div className="flex justify-end w-full my-5 pr-5">
                <Button url="/">
                    <div className="flex justify-center items-center gap-2">
                        <IconHomeBolt />
                        Login
                    </div>
                </Button>
            </div>
        </div>
    )
}