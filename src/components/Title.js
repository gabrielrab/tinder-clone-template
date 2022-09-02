import React from "react";

export default function Title({ text, size = "small", color = "primary" }) {
  const colors = {
    primary: "#424242",
    secondary: "white",
  };
  const sizes = {
    large: <h1 style={{ color: colors[color] }}>{text}</h1>,
    medium: <h3 style={{ color: colors[color] }}>{text}</h3>,
    small: <h5 style={{ color: colors[color] }}>{text}</h5>,
  };
  return sizes[size];
}
