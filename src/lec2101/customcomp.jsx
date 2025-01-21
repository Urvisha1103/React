import { useState } from "react";
import UserComp1 from "./cleanup";

const ShowHideUser = ({ xyz }) =>
(xyz ? <UserComp1 /> : null);

function Conditional() {
    const [show, stateShow] = useState(false);
    return (
        <div>
            <button onClick={() => stateShow(!show)}>
                {show ? "Hide User" : "Show User"}
            </button>
            <ShowHideUser xyz={show} />
        </div>
    );
}

export default Conditional;