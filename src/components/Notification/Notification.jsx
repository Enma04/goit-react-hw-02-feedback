import React, { Component } from 'react';

export default class Notification extends Component {
    render() {
        const { message } = this.props;
        
        return(
            <h5>{ message }</h5>
        );
    }
}
