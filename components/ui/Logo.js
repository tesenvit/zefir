import Link from 'next/link'
import Image from 'next/image'
import textImg from '/public/logo/text.svg'
import letterImg from '/public/logo/letter.svg'

export default function Logo() {
    return (
        <Link href={'/'}>
            <a>
                <div className="flex items-center justify-center h-full relative">
                    <div className="w-24 h-24">
                        <Image alt="Zefir text logo" src={textImg} layout="fill" objectFit='contain' />
                    </div>
                    <div className="m-auto h-3/4 w-3/4 absolute inset-x-0 opacity-10">
                        <Image alt="Zefir letter logo" src={letterImg} layout='fill' objectFit='contain' />
                    </div>
                </div>
            </a>
        </Link>
    )
}