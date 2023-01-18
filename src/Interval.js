import React from 'react';

class Interval extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeSinceMount: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ timeSinceMount: prevState.timeSinceMount + 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>Time since last mount: {this.state.timeSinceMount} seconds</div>
        );
    }
}

export default Interval;

