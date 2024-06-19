import { IconHomeBolt } from "@tabler/icons-react"
import Link from "next/link"


export default function Logo() {
    return <Link href="/">
        <IconHomeBolt size={40} />
    </Link>
}