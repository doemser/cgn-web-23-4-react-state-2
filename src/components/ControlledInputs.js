import { useState } from "react";

const colors = [
  { id: "a", name: "#123456" },
  { id: "b", name: "#d72d2d" },
  { id: "c", name: "#13864b" },
];

export default function ControlledInputs() {
  const [inputValue, setInputValue] = useState("#123456");

  const filteredColors = colors.filter((color) => {
    return color.name.includes(inputValue);
  });

  return (
    <>
      <h2>Controlled Inputs</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      {/* <input
        type="color"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      /> */}
      <ul>
        {filteredColors.map((color) => {
          return (
            <li key={color.id} style={{ background: color.name }}>
              {color.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
