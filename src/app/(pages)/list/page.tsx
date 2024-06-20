'use client'                                        // importante para o next conseguir importa
import { SuperTagsProvider } from "@/app/context/SuperTagsContext";
import { SelectedSuperTagProvider } from "@/app/context/SelectedSuperTagContext";
import RenderFolderFiles from "@/app/componets/RenderFolderFiles";
import Profile from "@/app/componets/Profile";
import Settings from "@/app/componets/Settings";
import Selected from "@/app/componets/Selected";


export default function List() {

    return (
        <SelectedSuperTagProvider>
            <div className="flex flex-row w-full">
                <div className="flex flex-col w-[328px] gap-5 ">
                    <Profile />
                    <Settings />
                    <div className="mt-2 text-white text-3">SUPERTAGS</div>
                    <SuperTagsProvider >
                        <RenderFolderFiles fatherId={null} />
                    </SuperTagsProvider>

                </div>
                <div className="flex-1  text-white">
                    <Selected />
                </div>
            </div>
        </SelectedSuperTagProvider>
    )
}