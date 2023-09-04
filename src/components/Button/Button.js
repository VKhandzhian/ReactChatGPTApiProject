import PropTypes from 'prop-types';

const Button = (props) => {

    const { className, name, onClick } = props;

    return <button className={className} onClick={onClick}>{name}</button>;
}

Button.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;