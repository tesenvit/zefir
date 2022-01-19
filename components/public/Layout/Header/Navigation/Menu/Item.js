import Link from 'next/link'
import { useState } from 'react'
import SubMenu from './SubMenu.js'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

function Item({item}) {

    const router       = useRouter();
    const activeClass  = router.pathname === item.url ? 'active' : ''
    const subMenu      = item.subMenuItems ? <div className="sub-menu"><SubMenu items={item.subMenuItems} /></div> : ''


    return (
        <>
            <li>
                <Link href={ item.url }>
                    <a className={ `h-100 d-flex align-items-center link ${activeClass}` } >
                        { item.title }
                    </a>
                </Link>
                { subMenu }
            </li>

            <style style="scss" jsx>{`
                .link {
                    transition: color .25s ease-out;
                    outline: 1px solid red;
                }
                
                .link:hover, .active {
                    color: var(--color-brown);
                }
                .test {
                    //outline: 1px solid green;
                }
            `}</style>
        </>
    )
}

Item.propTypes = {
    item: PropTypes.object
}

export default Item