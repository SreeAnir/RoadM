import React,{ useState} from "react";

const CounterFn = () => {
  const [count,setCount] = useState(0);
    const handleclick = () => {
       setCount(count+1) ;
    }
return (
  <>
    <button onClick={handleclick}>Click{count}</button>
    
    </>
)
}

export default CounterFn;
