import PropTypes from 'prop-types'

function Arrow({ position = 'down', color = 'black' }) {

    const positionsMap = {
        'up': '-rotate-135 -mb-px',
        'right': '-rotate-45 mb-px',
        'down': 'rotate-45 mb-3px',
        'left': 'rotate-135 mb-px'
    }

    return (
        <i className={`
            border-${ color } 
            border-solid 
            inline-block 
            border-r 
            border-b
            p-3px
            transition-all ease-in-out duration-300
            ${ positionsMap[position] }
        `} />
    )
}

Arrow.propTypes = {
    position: PropTypes.oneOf(['up', 'right', 'down', 'left']),
    color: PropTypes.string
}

export default Arrow