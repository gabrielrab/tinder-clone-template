import React, { useState } from "react";

export default function Button({ text, ...props }) {
  return (
    <button {...props} className="btn">
      {text}
    </button>
  );
}
