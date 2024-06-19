import { IconHomeBolt, IconList, IconLogin } from "@tabler/icons-react";
import Button from "../componets/Button";
import Input from "../componets/Input";

export default function Login() {
    return (
        <div className="flex items-center w-full">
            <div className="flex  w-full flex-col items-center">
                <div className="text-white text-2xl font-bold mb-4">Entre com sua conta</div>
                <div className="flex flex-col max-w-[450px] w-full items-center gap-6 p-8 rounded bg-neutral-900 border border-neutral-700">
                    <Input label="Email" />
                    <Input label="Senha" password />
                    <Button full color="bg-violet-600" hoverColor="bg-violet-900" textColor="text-white" >
                        <div className="flex justify-center items-center gap-2 w-full">
                            <IconLogin />
                            Login
                        </div>
                    </Button>
                    <Button full color="bg-neutral-900" hoverColor="bg-gray-800" textColor="text-white" >
                        <div className="flex justify-center items-center gap-2 w-full">
                            Deseja se registrar?
                        </div>
                    </Button>
                </div>
            </div>
        </div>

    )
}