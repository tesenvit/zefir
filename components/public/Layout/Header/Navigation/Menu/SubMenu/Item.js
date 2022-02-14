import Link          from 'next/link'
import PropTypes     from 'prop-types'
import { useRouter } from 'next/router'

function Item({ item }) {

    const router      = useRouter()
    const activeClass = router.pathname === item.url ? 'text-brown' : ''

    return (
        <li className="
            lg:first:pt-7
            lg:last:pb-7
            py-0.5
        ">
            <Link href={ item.url }>
                <a className={`
                    lg:pl-7
                    h-full
                    transition-colors ease-in-out duration-300 
                    hover:text-brown 
                    block
                    whitespace-no-wrap
                    py-1.5
                    pl-14
                    ${ activeClass }
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