import * as React from "react";

function FuncComp1() {
    const [name] = React.useState("Hello");
    return <h1>{name}</h1>;
}
export default FuncComp1;