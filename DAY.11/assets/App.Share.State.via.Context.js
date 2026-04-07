import React, { memo, useContext, useState, createContext } from "react";
// 1) CREATE CONTEXT
const Context = createContext(); // Context.Provider (Component), Context.Consumer (forget about it)
// Context => Better name => CounterContext
console.clear();
// console.log(Context);
// useContext => Access share Context.Provider value from Context consumers

export default function Parent() {
  const [parentData, setParentData] = useState({
    counter: 0,
  });

  const contextValue = { parentData, setParentData };

  return (
    <div>
      <h1>Parent Component</h1>
      <button
        onClick={() => setParentData({ counter: parentData.counter + 1 })}
      >
        Click
      </button>
      <p>Parent Data - counter: {parentData.counter}</p>

      {/* 2) DECIDE THE CONTEXT BOUNDARIES */}
      {/* 3) USE THE <Context.Provider> TO ENCLOSE THE TREE SECTION */}
      {/* 4) SHARE CONTEXT VALUE */}
      {/* Context Provider (START) */}
      <Context.Provider value={contextValue}>
        <Child />
        <Child />
        {/* <MemoChild /> */}
        <AnotherChild />
      </Context.Provider>

      {/* Context Provider (END) */}
    </div>
  );
}

function AnotherChild() {
  const context = useContext(Context);
  // In order to "consume" Context value, Component that uses the useContext hook
  // must be enclosed inside the Context.Provider
  console.log(context);
  // Does not care about Parent state
  return <div>Does not care about Parent State</div>;
}

function GrandChild() {
  // 5) ACCESS CONTEXT VALUE
  const { parentData } = useContext(Context); // Returns the value that we passed to "value={<THIS THING>}"
  const { counter } = parentData;
  // Access (read) parentData (getter)
  return <div>GrandChild {counter}</div>;
}

function Child() {
  // 5) ACCESS CONTEXT VALUE
  const { parentData, setParentData } = useContext(Context); // Returns the value that we passed to "value={<THIS THING>}"
  // Access (read/write) parentData (getter), setParentData (setter)
  const { counter } = parentData;
  return (
    <>
      <div>Child needs to talk to Parent component {counter}</div>
      <button
        onClick={() => {
          setParentData({ counter: parentData.counter + 1 });
        }}
      >
        Change Parent data from Child
      </button>
      <GrandChild />
    </>
  );
}
