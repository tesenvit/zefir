import Item      from './Item.js';
import PropTypes from 'prop-types'

function Menu({items}) {

    const listItems = items.map((item, index) => <Item item={item} key={index} />)

    return (
        <ul className="
            lg:items-center
            lg:flex-row
            lg:first:pt-0
            lg:last:pb-0

            first:pt-7
            last:pb-7
            h-full
            flex flex-col items-start
            font-raleway
        ">
            { listItems }
        </ul>
    )
}

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Menu