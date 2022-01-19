import PropTypes from 'prop-types'
import Link from "next/link";

function SubMenu({items}) {
    return (
        <div className="antialiased group inline-block relative">
            <ul className="absolute hidden group-hover:block">
                { items.map((item, index) => {
                    return (
                        <li className="" key={ index }>
                            <Link href={item.url}>
                                <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">{ item.title }</a>
                            </Link>
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}

SubMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default SubMenu