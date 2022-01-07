import Image from 'next/image'
import textImg from '/public/logo/text.svg'
import letterImg from '/public/logo/letter.svg'

export default function Logo() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center h-100 wrapper">
                <div className="text">
                    <Image alt="Zefir text logo" src={textImg} layout="fill" objectFit='contain' />
                </div>
                <div className="m-auto h-75 w-75 m-auto letter">
                    <Image alt="Zefir letter logo" src={letterImg} layout='fill' objectFit='contain' />
                </div>
            </div>

            <style jsx>{`
                .wrapper {
                    position: relative;
                }
                
                .letter {
                    position: absolute;
                    opacity: .1;
                    left: 0;
                    right: 0;
                }
                
                .text {
                    width: 100px;
                    height: 100px;
                }
            `}</style>
        </>
    )
}