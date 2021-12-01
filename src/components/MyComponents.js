import React, { useState } from 'react';

function MyComponent(props){
    const {tilte} = props;
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(count + 1);
    };

    const countReset = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>{tilte} hit {count} times</h1>
            <button onClick={countUp}>Click Me</button>
            <button onClick={countReset}>Reset</button>

        </div>
    )   
}

export default MyComponent;