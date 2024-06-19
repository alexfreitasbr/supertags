
export interface InputProps {
    label: string
    password?: boolean
}

export default function Input({ label, password }: InputProps) {

    const inputType = password ? "password" : "text"

    return (
        <div className="flex flex-col w-full gap-2">
            <label htmlFor="{label}" className=" text-white text-4">
                {label}
            </label>
            <input className="flex rounded bg-black border border-neutral-700 text-white p-2" name="{label}" type={inputType} />
        </div>

    )
}

