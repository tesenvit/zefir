import Menu                    from './Menu'
import Logo                    from '/components/ui/Logo'
import { useState }            from 'react'
import { useWindowSize }       from 'helpers'
import { Divide as Hamburger } from 'hamburger-react'
import {
    LARGE_SIZE,
    HEADER_MENU,
    HAMBURGER_MENU_SIZE,
} from 'helpers/constants'

export default function Navigation() {

    const [isOpenMenu, setOpenMenu] = useState(false)

    const size           = useWindowSize();
    const showNavigation = size.width < LARGE_SIZE
        ? (isOpenMenu ? 'opacity-100 overflow-visible' : 'opacity-0 overflow-hidden')
        : ''

    return (
        <>
            <nav className={`
                lg:order-2
                lg:w-3/5
                lg:bg-white
                lg:relative
                lg:top-0
                lg:flex-row
                lg:pl-0
                lg:h-full
    
                w-full
                flex flex-col justify-center
                order-3
                absolute top-17.5 right-0
                bg-brown-light
                transition-opacity duration-200 ease-in delay-50
                
                ${ showNavigation }
                
                outline outline-1
            `}>
                <Menu items={ HEADER_MENU.left } />
                <div className={ `mx-5 w-28 hidden lg:block` }>
                    <Logo />
                </div>
                <Menu items={ HEADER_MENU.right } />
            </nav>

            <div className="order-last block lg:hidden">
                <Hamburger color="#4d4d4d" size={ HAMBURGER_MENU_SIZE } toggled={ isOpenMenu } toggle={ setOpenMenu } />
            </div>
        </>
    )
}