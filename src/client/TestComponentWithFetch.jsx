import React from 'react';

import comms from './communications';

class Test extends React.Component {
    constructor() {
        super();

        this.state = {
            data: {},
        };

        comms({
            endpoint: '/example',
        })
        .then((data) => {
            this.setState({
                data,
            });
        })
    }

    render() {
        return (
            <code>
                {this.state.data}
            </code>
        );
    }
}

export default Test;
