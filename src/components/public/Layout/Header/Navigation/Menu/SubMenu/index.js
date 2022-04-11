import Item      from './Item'
import PropTypes from 'prop-types'

function SubMenu({items, isShow}) {

    const listItems = items.map((item, index) => <Item item={ item } key={ index } />)
    const show      = isShow
        ? 'overflow-visible opacity-100 relative h-auto'
        : 'overflow-hidden opacity-0 h-0'

    return (
        <ul className={`
            lg:-mx-7
            lg:opacity-0
            lg:h-0
            lg:overflow-hidden
            lg:group-hover:opacity-100
            lg:group-hover:h-auto
            
            antialiased
            absolute
            transition-opacity duration-200 ease-in delay-50
            w-60
            bg-brown-light
            ${ show }
        `}>
            { listItems }
        </ul>
    )
}

SubMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    isShow: PropTypes.bool
}

export default SubMenu