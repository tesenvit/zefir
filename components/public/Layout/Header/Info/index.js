import Link from 'next/link'

export default function Info() {
    return (
        <div className={`w-1/5 h-full flex items-center justify-end`}>
            <Link href={'tel:+380662857020'}>
                <a className={`text-sm hover:text-brown transition-colors ease-in-out duration-300`}>
                    +38 (066) 285 70 20
                </a>
            </Link>
        </div>
    )
}