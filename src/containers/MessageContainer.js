import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/Message';

class MessageContainer extends Component {
    render() {
        let { message } = this.props;
        console.log(message);

        return (
            <Message message={message}>

            </Message>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer);
