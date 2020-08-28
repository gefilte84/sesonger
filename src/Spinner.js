import React from 'react';

// classe for spinner for lett gjenbruk
const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
          <div className="ui big text loader">{props.message}</div>

    </div>
    );
};

Spinner.defaultProps = {
    message: 'Please accept location request'
};

export default Spinner;