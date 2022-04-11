import Link from 'next/link'

export default function Phone() {
    return (
        <div className="
                lg:justify-end
            lg:order-3
            lg:w-1/5

            order-2
            w-2/3 h-full
            flex items-center justify-center
        ">
            <Link href={'tel:+380662857020'}>
                <a className="
                    text-sm
                    hover:text-brown transition-colors ease-in-out duration-300
                ">
                    +38 (066) 285 70 20
                </a>
            </Link>
        </div>
    )
}