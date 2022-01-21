import Item from './Item.js';
import PropTypes from 'prop-types'

function Menu({items}) {

    const listItems = items.map((item, index) => <Item item={item} key={index} />)

    return (
        <ul className={`
            h-full 
            flex 
            items-center 
            raleway-font 
        `}>
            { listItems }
        </ul>
    )
}

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Menu