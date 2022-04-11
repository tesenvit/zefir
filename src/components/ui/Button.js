import Link      from 'next/link'
import PropTypes from 'prop-types'

function Button({ href, text }) {
    return (
        <Link href={ href } >
            <button className="
                border border-solid border-black
                font-raleway
                px-9 py-4.5
                relative
                overflow-hidden
                z-10
                transition-all duration-300

                after:content-['']
                after:absolute
                after:bottom-0
                after:left-0
                after:w-full
                after:bg-transparent
                after:-z-20

                before:content-['']
                before:absolute
                before:bottom-0
                before:left-0
                before:w-0
                before:h-full
                before:bg-brown
                before:transition-all
                before:duration-300
                before:-z-10

                hover:before:w-full
                hover:border-brown
                hover:text-white
            ">
                { text }
            </button>
        </Link>
    )
}

Button.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Button