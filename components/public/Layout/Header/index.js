import Weather from './Weather';
import Navigation from './Navigation'
import styles from './header.module.scss'

export default function Header() {
    return (
        <header className={`
            flex 
            items-center 
            justify-center 
            sticky 
            top-0 
            z-50 
            px-10 
            bg-white 
            ${styles.wrapper}
        `}>
            <Weather />

            <Navigation />

            <div className={`w-1/5 h-full flex items-center justify-end outline outline-1 bg-brown-light`}>
                right
            </div>
        </header>
    )
}