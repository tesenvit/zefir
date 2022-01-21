import Item from './Item'
import PropTypes from 'prop-types'

function SubMenu({items}) {

    const listItems = items.map((item, index) => <Item item={item} key={index} />)

    return (
        <ul className={`
            antialiased
            group
            absolute
            invisible opacity-0
            group-hover:opacity-100 group-hover:visible
            transition-all duration-300 ease-in-out
            w-60
            -mx-5 px-5 py-2.5
            bg-brown-light
        `}>
            { listItems }
        </ul>
    )
}

SubMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default SubMenu