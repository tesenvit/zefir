import Image from 'next/image'
import styles from './styles.module.scss'
import textImg from '/public/logo/text.svg'
import letterImg from '/public/logo/letter.svg'

export default function Logo() {
    return (
        <div className={`d-flex align-items-center justify-content-center h-100 ${styles.wrapper}`}>
            <div className={`${styles.text}`}>
                <Image alt="Zefir text logo" src={textImg} layout="fill" objectFit='contain' />
            </div>
            <div className={`m-auto h-75 w-75 m-auto ${styles.letter}`}>
                <Image alt="Zefir letter logo" src={letterImg} layout='fill' objectFit='contain' />
            </div>
        </div>
    )
}