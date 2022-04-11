import Link              from 'next/link'
import Arrow             from 'components/ui/Arrow'
import SubMenu           from './SubMenu'
import PropTypes         from 'prop-types'
import { useState }      from 'react'
import { useRouter }     from 'next/router'
import { LARGE_SIZE }    from 'helpers/constants'
import { useWindowSize } from 'helpers'

function Item({item}) {

    const router      = useRouter()
    const activeClass = router.pathname === item.url ? 'text-brown' : ''
    const url         = item.url === '#' ? router.pathname : item.url

    const [isOpenSubMenu, setOpenSubMenu] = useState(false)
    const subMenu = item.subMenuItems ? <SubMenu isShow={ isOpenSubMenu } items={ item.subMenuItems } /> : ''

    const size        = useWindowSize()
    const handleClick = () => setOpenSubMenu(subMenu && size.width < LARGE_SIZE ? !isOpenSubMenu : false)

    const arrow = subMenu && size.width < LARGE_SIZE
        ? <Arrow position={ isOpenSubMenu ? 'down' : 'right' } color={ isOpenSubMenu ? 'brown' : 'black' } />
        : ''

    return (
        <li
            className="
                lg:py-0
                lg:mx-5

                h-full w-full
                py-0.5
                group
            "
            onClick={ handleClick }
        >
            <Link href={ url }>
                <a className={`
                    lg:py-0
                    lg:px-0
                    
                    py-1.5 px-7
                    flex items-center justify-between
                    h-full 
                    link
                    ${ activeClass }
                `}>
                    <span>{ item.title }</span>
                    <span>{ arrow }</span>
                </a>
            </Link>
            { subMenu }
        </li>
    )
}

Item.propTypes = {
    item: PropTypes.object,
}

export default Item