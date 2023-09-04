import PropTypes from 'prop-types';

const Label = (props) => {

    const { className, htmlFor, value } = props;

    return <label className={className} htmlFor={htmlFor}>{value}</label>;
}

Label.propTypes = {
    className: PropTypes.string,
    htmlFor: PropTypes.string,
    value: PropTypes.string
}

export default Label;