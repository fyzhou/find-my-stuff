import React from "react";

export default function ItemView({ item }) {
  const name = item.name;
  const description = item.description;
  return (
    <div>{name} - {description}</div>
  );
}