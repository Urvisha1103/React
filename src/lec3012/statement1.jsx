import * as React from "react";

class StateABC extends React.Component{
    state = {
        first: false,
        second: 2.13,
        third: "Hello World",
        fourth: "red",
        fifth: "blue",
    };

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
export default StateABC;