import * as React from "react";

class StateXYZ extends React.Component {
    state = {
        first: false,
        second: 2.13,
        third: "Hello World",
        fourth: "red",
        fifth: "blue",
    };

    constructor() {
        super();
        setTimeout(() => {
            this.setState({
                first: true,
                second: 3.14,
                third: "world",
                fourth: "yellow",
                fifth: "purple",
            });
        },1000);
    }

    render(){
        const{first, second, third, fourth, fifth } = this.state;
        return (
            <div>
                <button disabled={first}>My Button</button>
                <p style={{ color: fourth }}>
                    Value of float variable is <strong>{second}</strong>
                </p>
                <p style={{ color: fifth }}>
                    Value of string variable is <strong>{third}</strong>
                </p>
            </div>
        );
    }
}

export default StateXYZ;