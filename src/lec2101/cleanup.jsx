import { useState, useEffect } from "react";
import { Promise } from "bluebird";

function fetchuserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "RKU"
            });
        }, 2000);
    });
}

function UserComp1() {
    const [id, setId] = useState("loading...");
    const [name, setName] = useState("loading...");

    useEffect(() => {
        const promise = fetchuserData().then((user) => {
            setId(user.id);
            setName(user.name);
        });
        return () => {
            promise.cancel();
        };
    });
    return (
        <div>
            <h3>User ID: {id}</h3>
            <h3>User Name: {name}</h3>
        </div>
    );
}

export default UserComp1;
