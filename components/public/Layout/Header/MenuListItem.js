import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function MenuListItem({item}) {

    const router      = useRouter();
    const activeClass = router.pathname === item.url ? 'active' : ''

    return (
        <>
            <li className="px-3">
                <Link href={item.url}>
                    <a className={`h-100 d-flex align-items-center link ${activeClass}`}>
                        {item.title}
                    </a>
                </Link>
            </li>

            <style style="scss" jsx>{`
                .link {
                    transition: color .25s ease-out;
                }
                
                .link:hover {
                    color: var(--color-brown);
                }
                
                .active {
                    color: var(--color-brown);
                }
            `}</style>
        </>
    )
}

MenuListItem.propTypes = {
    item: PropTypes.object
}


export default MenuListItem