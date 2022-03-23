import React, { useEffect, useState } from 'react';

const Watch2 = () => {

    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const stepCount = steps + 1;
        console.log(steps);
        console.log(stepCount);
        setSteps(stepCount)

    }

    useEffect(() => {
        console.log(steps);

    }, [steps])

    return (
        <div>
            <h1>I have a watch</h1>
            <p>Today my step: {steps}</p>
            <button onClick={increaseSteps}>De dour de ..............</button>
        </div>
    );
};

export default Watch2;