import Info from './Info'
import Weather from './Weather'
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

            <Info />
        </header>
    )
}