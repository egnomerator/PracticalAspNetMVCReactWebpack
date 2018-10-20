import React from "react";
import {Button} from "reactstrap";

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Button color="info" className="float-right">Info</Button>
                <div className="text-success">it works!</div>
            </div>
        );
    }
}
