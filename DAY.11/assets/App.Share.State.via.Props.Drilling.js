import React, { memo, useState } from "react";
console.clear();

export default function Parent() {
  const [parentData, setParentData] = useState({
    counter: 0,
  });

  return (
    <div>
      <h1>Parent Component</h1>
      <button
        onClick={() => setParentData({ counter: parentData.counter + 1 })}
      >
        Click
      </button>
      <p>Parent Data - counter: {parentData.counter}</p>
      <Child parentData={parentData} setParentData={setParentData} />
      <Child parentData={parentData} setParentData={setParentData} />
      <AnotherChild />
    </div>
  );
}

function AnotherChild() {
  return <div>Does not care about Parent State</div>;
}

function Child({ parentData, setParentData }) {
  return (
    <>
      <div>Child needs to talk to Parent component {parentData.counter}</div>
      <button
        onClick={() => {
          const newState = { counter: parentData.counter + 1 };
          // const newState = parentData.counter + 1;
          // console.log(newState);
          setParentData(newState);
        }}
      >
        Change Parent data from Child
      </button>
    </>
  );
}
