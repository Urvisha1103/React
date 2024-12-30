import * as React from "react";

class StateMerge extends React.Component {
    state = {
        first: "loading...",
        second: "loading...",
        third: "loading...",
        fourth: "loading...",
        cmplmsg: "loading done...",
    };

    constructor() {
        super();
        setTimeout(() => {
            this.setState({ first: "done",});
        },2000);
        setTimeout(() => {
            this.setState({ second: "done",});
        },4000);
        setTimeout(() => {
            this.setState({ third: "done",});
        },6000);
        setTimeout(() => {
            this.setState((state) => ({
                ...state,
                first: state.cmplmsg,
                second: state.cmplmsg,
                third: state.cmplmsg,
                fourth: state.cmplmsg,
            }));
        },8000);
    }
    render() {
        return (
            <div>
            <ul>
              {Object.keys(this.state)
                .filter((keys) => keys !== "cmplmsg")
                .map((keys) => (
                  <li key={keys}>
                    <strong>{keys} : </strong>
                    {this.state[keys]}
                  </li>
                ))}
            </ul>
          </div>
        );
    }
}

export default StateMerge;