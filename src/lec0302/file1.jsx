import { resolve } from "bluebird";
import * as React from "react";

export const UserContex = React.createContext();

function FetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: "1",
                name: "RK University"
            });
        }, 10000);
    });
}

export function UserProvider({ children }) {
    const [user, setUser] = React.useState({
        id: "Loading...",
        name: "Loading...",
    });
    React.useEffect(() => {
        FetchUser().then((data) => setUser(data));
    }, []);
    return <UserContex.Provider value={ user }>{children}</UserContex.Provider>;
}