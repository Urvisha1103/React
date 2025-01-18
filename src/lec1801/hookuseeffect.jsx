import * as React from "react";
function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                x: "Rku Student",
                y: 1,
            });
        }, 2000);
    });
}

function ApiSimulation() {
    const [name, setName] = React.useState("loading...");
    const [id, setId] = React.useState("loading...");
    React.useEffect(() => {
        fetchUserData().then((abc) => {
            setName(abc.x);
            setId(abc.y);
        });
    });

    return (
        <div>
            User: {name} <br />
            Id: {id}
        </div>
    );}

export default ApiSimulation;