import MyButton from "./mybtn";
import MyList from "./mtlist";
import * as React from "react";

class MyComponent extends React.Component {
    state = {
        abc: "My Button",
        xyz: true,
        itms: ["a", "b", "c", "d"],
    };

    constructor() {
        super();
        setTimeout(() => {
            this.setState({
                abc: true,
                xyz: false,
                itms: ["ice","cream","cone"],
            });
        },1000);
    }
    render() {
        const { abc, xyz, itms } = this.state;
        return (
            <div>
                <MyButton abc={abc} xyz={xyz} />
                <MyList itms={itms} />
            </div>
        );
    }
}
export default MyComponent;