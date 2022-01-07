import styles from '/styles/header.module.scss'
import Link from 'next/link'
import Logo from 'components/Logo'

export default function () {
    const leftMenu = [
        {
            title: 'Главная',
            url: '/'
        },
        {
            title: 'Номера',
            url: '/rooms'
        },
        {
            title: 'Инфо',
            url: '/info'
        }
    ]

    const rightMenu = [
        {
            title: 'Галерея',
            url: '/gallery'
        },
        {
            title: 'Контакты',
            url: '/contacts'
        },
        {
            title: 'Блог',
            url: '/blog'
        }
    ]

    const debugStyle = {
        outline: '1px solid black'
    }
    return (
        <>
            <nav style={debugStyle} className={`justify-content-between d-flex align-items-center ${styles.wrapper}`}>
                <div className="col-2">left</div>

                <div className="col-8 d-flex justify-content-center h-100">
                    <ul className={`m-0 p-0 d-flex raleway-font ${styles.menu}`}>
                        <li>
                            <Link href={'/'}>
                                <a className="p-3">Главная</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/rooms'}>
                                <a className="p-3">Номера</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/info'}>
                                <a className="p-3">Инфо</a>
                            </Link>
                        </li>

                        <li className={`px-3 ${styles.logo}`} >
                           <Logo />
                        </li>

                        <li>
                            <Link href={'/gallery'}>
                                <a className="p-3">Галерея</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/contacts'}>
                                <a className="p-3">Контакты</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/blog'}>
                                <a className="p-3">Блог</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-2 d-flex justify-content-end">right</div>
            </nav>
        </>
    )
}