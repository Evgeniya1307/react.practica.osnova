//функциональная с хуком по счётчикам

import React, { useState } from 'react'


function Fcomponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
  <p>Current:{count} </p> 
  <button onClick={() => setCount(0)}>Сбросить</button>
      <button onClick={() => setCount(count +1)}>-</button>
      <button onClick={() => setCount(count -1)}>-</button>
      </div>
  );
}

export default Fcomponent;








  