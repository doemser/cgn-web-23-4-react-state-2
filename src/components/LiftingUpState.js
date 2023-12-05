import { useState } from "react";

function Count({ count }) {
  return <h3>{count}</h3>;
}

function CountButtons({ onAddCount, onSubtractCount }) {
  return (
    <>
      <button onClick={onSubtractCount}>-1</button>
      <button onClick={onAddCount}>+1</button>
    </>
  );
}

export default function LiftingUpState() {
  const [count, setCount] = useState(0);

  function handleSubtractCount() {
    setCount(count - 1);
  }

  const handleAddCount = (event) => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>Lifting Up State</h2>
      <Count count={count} />
      <CountButtons
        onSubtractCount={handleSubtractCount}
        onAddCount={handleAddCount}
        setCount={setCount}
      />
    </>
  );
}
