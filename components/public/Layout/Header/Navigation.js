import MenuList from './MenuList'
import Logo from 'components/ui/Logo.js'
import {MENU_LEFT, MENU_RIGHT} from '/constants/header';

export default function Navigation() {
    return (
        <>
            <nav className="h-100 d-flex justify-content-center align-items-center">
                <MenuList items={MENU_LEFT} />

                <div className="px-3 logo" >
                    <Logo />
                </div>

                <MenuList items={MENU_RIGHT} />
            </nav>

            <style jsx>{`
                .logo {
                    width: 140px;
                }
            `}</style>
        </>
    )
}