import PropTypes from 'prop-types'

const positionsMap = {
    'up': '-rotate-135 -mb-px',
    'right': '-rotate-45 mb-px',
    'down': 'rotate-45 mb-3px',
    'left': 'rotate-135 mb-px'
}

function Arrow({ position = 'down', color = 'black' }) {

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
    position: PropTypes.oneOf(Object.keys(positionsMap)),
    color: PropTypes.string
}

export default Arrow