import React from 'react';
import PropTypes from 'prop-types';

const Error = ({message}) => {
    return (
        <div className="card-panel red darken-4 error col s12">
            {message}
        </div>
    );
};

Error.propTypes = {
    message: PropTypes.string.isRequired
};

export default Error;