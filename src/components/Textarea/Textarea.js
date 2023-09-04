import PropTypes from 'prop-types';

const Textarea = (props) => {

    const { 
        id,
        name,
        className,
        isDisabled,
        isReadOnly,
        rows,
        cols,
        value,
        onChange
    } = props;

    return (
        <textarea 
            id={id}
            name={name}
            className={className}
            disabled={isDisabled} 
            readOnly={isReadOnly}
            rows={rows}
            cols={cols}
            value={value}
            onChange={onChange}/>
        );
}

Textarea.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    rows: PropTypes.string,
    cols: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default Textarea;