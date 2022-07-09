import { PropTypes } from 'prop-types'

function Button({ children, version, isDisabled, type, handleClick }) {
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`} onClick={handleClick}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    version: 'primary',
    isDisabled: false,
    type: 'submit'
}

Button.prototype = {
    chidren: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button
