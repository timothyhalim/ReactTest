import React  from 'react';

import { useState } from "react";
import Todos from "./Todos";

const Home = () => {
    const [count, setCount] = useState(0);
    const [todos, ] = useState(["todo 1", "todo 2"]);


    const increment = () => {
        setCount((c) => c + 1);
    };


    return (
        <>
          <h1>HOME</h1>
          <Todos todos={todos} />
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
          </div>
        </>
      );
};

export default Home;
  