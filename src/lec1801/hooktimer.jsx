import * as React from "react";

function CountdownTimer() {
    const [time, setTime] = React.useState(300); // 300 seconds (5 minutes)
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    React.useEffect(() => {
        if (time > 0) {
            const timerId = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timerId); // Cleanup on unmount
        }
    }, [time]);

    return (
        <div style={{ textAlign: "center", fontSize: "2rem", marginTop: "2rem" }}>
            Countdown Timer: <br />
            {formatTime(time)}
        </div>
    );
}

export default CountdownTimer;
