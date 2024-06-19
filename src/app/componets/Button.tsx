import Link from "next/link"

export interface ButtonProps {
    url?: string
    onClick?: () => void
    color?: string
    hoverColor?: string
    textColor?: string
    full?: boolean
    children?: any
}

export default function Button({ url, onClick, color, hoverColor, textColor, full, children }: ButtonProps) {

    const btn = 
        <button className={`
            ${textColor ? textColor : "text-white"}
            ${color ? color : "bg-gray-500"}
             hover:${hoverColor ? hoverColor : "bg-gray-800"}
             text-4
             p-3
             rounded-lg
             font-bold
             w-full
             border 
             border-neutral-700
            hover:border-neutral-500
             `}
        >
            {children}
        </button>

    return url
        ? <Link href={url}>{btn}</Link>
        : <div className={
            `${full && "w-full"}`
        }> {btn}</div>

}

