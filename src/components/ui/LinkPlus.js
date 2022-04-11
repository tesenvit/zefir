import Link      from 'next/link'
import PropTypes from 'prop-types'

function LinkPlus({ href, text, isTargetBlank = false }) {
    const target = isTargetBlank ? '_blank' : '_self'

    return (
        <Link href={ href }>
            <a className="uppercase font-raleway flex items-center link group" target={ target }>
                <span className="mr-2">{ text }</span>
                <span className="
                    relative
                    w-2 h-2

                    before:absolute
                    before:bg-black
                    before:transition before:transform before:ease-out
                    before:top-0 before:left-2/4
                    before:w-px before:h-full
                    before:-ml-0.5px

                    after:absolute
                    after:bg-black
                    after:transition after:transform after:ease-out
                    after:top-2/4
                    after:w-full after:h-px
                    after:-mt-0.5px

                    group-hover:before:rotate-90
                    group-hover:after:rotate-90
                    group-hover:before:bg-brown
                    group-hover:after:bg-brown
                " />
            </a>
        </Link>
    )
}

LinkPlus.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isTargetBlank: PropTypes.bool
}

export default LinkPlus

