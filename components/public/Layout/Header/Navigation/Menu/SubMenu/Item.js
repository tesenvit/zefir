import Link from 'next/link'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

function Item({item}) {

    const router      = useRouter();
    const activeClass = router.pathname === item.url ? 'text-brown' : ''

    return (
        <li>
            <Link href={item.url}>
                <a className={`
                    transition-colors ease-in-out duration-300 
                    hover:text-brown 
                    py-2.5 
                    block 
                    whitespace-no-wrap 
                    ${activeClass}
                `} >
                    { item.title }
                </a>
            </Link>
        </li>
    )
}

Item.propTypes = {
    item: PropTypes.object
}

export default Item