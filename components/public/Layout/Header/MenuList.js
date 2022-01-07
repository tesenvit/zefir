import PropTypes from 'prop-types'
import MenuListItem from './MenuListItem'

function MenuList({items}) {
    return (
        <>
            <ul className={`m-0 p-0 d-flex raleway-font wrapper h-100`}>
                { items.map(item => <MenuListItem item={item} />) }
            </ul>

            <style jsx>{`
                .wrapper {
                    list-style: none;
                }
            `}</style>
        </>
    )
}

MenuList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MenuList