import Navigation from './Navigation'
import styles from './header.module.scss'

export default function Header() {
    return (
        <header className={`flex items-center justify-center px-10 ${styles.wrapper}`}>
            <div className={`w-1/5 h-full flex items-center outline outline-1 bg-brown-light`}>
                weather
            </div>

            <Navigation />

            <div className={`w-1/5 h-full flex items-center justify-end outline outline-1 bg-brown-light`}>
                right
            </div>
        </header>
    )
}