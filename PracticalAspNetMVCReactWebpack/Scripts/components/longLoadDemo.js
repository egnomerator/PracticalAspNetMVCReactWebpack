import React from "react";

export default class LongLoadDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 3000);
    }
    render() {
        return this.state.isLoading
            ? "Loading..."
            : "Wow, that's a lot of \"loading time!\"";
    }
}
