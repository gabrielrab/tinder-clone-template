import React, { useState } from "react";

export default function Range({
  min = 1,
  max = 300,
  name = "range",
  onChange,
  defaultValue = 5,
  ...props
}) {
  const [range, setRange] = useState(defaultValue);

  const handleRange = (event) => {
    // onChange(Number(event.target.value));
    setRange(event.target.value);
  };

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        name={name}
        onChange={handleRange}
        defaultValue={props.defaultValue || range}
        style={{
          backgroundSize: `${((range - min) * 100) / (max - min)}% 100%`,
        }}
        {...props}
      />
      <label htmlFor={name}>{range} km de distância</label>
    </>
  );
}
