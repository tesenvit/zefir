import Link from 'next/link';
import SubMenu from './SubMenu';
import PropTypes from 'prop-types'

function Menu({items}) {
    return (
        <ul className={`h-full flex items-center raleway-font outline outline-1`}>
            { items.map((item, index) => {
                return (
                    <li className={`h-full px-5 outline outline-1 group`} key={ index }>
                        <Link href={ item.url }>
                           <a className={`flex items-center h-full transition-colors ease-in-out duration-300 hover:text-brown`} >
                               { item.title }
                           </a>
                        </Link>
                        { item.subMenuItems ? <SubMenu items={item.subMenuItems} /> : '' }
                    </li>
                )
            }) }
        </ul>
    )
}

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Menu