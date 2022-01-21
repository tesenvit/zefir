import Link from 'next/link'
import SubMenu from './SubMenu'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

function Item({item}) {

    const router      = useRouter();
    const activeClass = router.pathname === item.url ? 'text-brown' : ''
    const subMenu     = item.subMenuItems ? <SubMenu items={item.subMenuItems} /> : ''
    const url         = item.url === '#' ? router.pathname : item.url

    return (
        <li className={`h-full px-5`}>
            <div className="h-full group">
                <Link href={ url }>
                    <a className={`
                        flex 
                        items-center 
                        h-full 
                        transition-colors ease-in-out duration-300 
                        hover:text-brown 
                        ${activeClass}
                    `}>
                        { item.title }
                    </a>
                </Link>
                { subMenu }
            </div>
        </li>
    )
}

Item.propTypes = {
    item: PropTypes.object,
}

export default Item