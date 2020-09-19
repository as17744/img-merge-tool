import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        ...state,
    };
};

class DoubleEdit extends React.Component {
    render() {
        return <div>41421312312</div>
    }
}

export default connect(mapStateToProps)(DoubleEdit);
