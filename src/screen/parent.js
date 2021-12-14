import React from "react";

export default function Parent(props) {
  const { item } = props;
  return (
    <div style={{ border: "1px solid green" }}>
      <h1>{item.id}</h1>
      <h1>{item.name}</h1>
      <h1>{item.from}</h1>
    </div>
  );
}
