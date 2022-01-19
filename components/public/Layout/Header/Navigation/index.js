import Logo from '/components/ui/Logo'
import Menu from './Menu'

export default function Navigation() {

    const MENU_LEFT_ITEMS = [
        {
            title: 'Главная',
            url: '/'
        },
        {
            title: 'Номера',
            url: '/rooms',
            subMenuItems: [
                {
                    title: 'Номер 1',
                    url: '/number/1'
                },
                {
                    title: 'Номер 2',
                    url: '/number/2'
                },
                {
                    title: 'Номер 3',
                    url: '/number/3'
                },
                {
                    title: 'Номер 4',
                    url: '/number/4'
                }
            ]
        },
        {
            title: 'Инфо',
            url: '/info'
        }
    ]

    const MENU_RIGHT_ITEMS = [
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

    return (
        <nav className={`w-3/5 justify-center h-full flex`}>
            <Menu items={MENU_LEFT_ITEMS} />

            <div className={`h-full w-28 outline outline-1`}>
                <Logo />
            </div>

            <Menu items={MENU_RIGHT_ITEMS} />
        </nav>
    )
}