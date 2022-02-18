import Phone from './Phone';
import Weather from './Weather'
import Navigation from './Navigation'
import Logo from 'components/ui/Logo'

export default function Header() {
    return (
        <header className="
            xl:px-10
            lg:justify-center
            lg:h-28
            min-sm:px-5

            flex items-center justify-between
            sticky top-0 z-50
            pr-1
            pl-3
            bg-white
            h-17.5

            outline outline-1 outline-black-500
        ">
            <div className="block lg:hidden order-first">
                <Logo onlyText={true} />
            </div>

            <Weather />
            <Navigation />
            <Phone />
        </header>
    )
}