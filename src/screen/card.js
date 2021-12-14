import React from "react";
import Parent from "./parent";
import { useState } from "react";

export default function Card() {
  const [search, setSearch] = useState([]);

  const data = [
    {
      id: 1,
      name: "ali",
      from: "pakistan",
    },
    {
      id: 2,
      name: "ali",
      from: "india",
    },
    {
      id: 3,
      name: "ali",
      from: "japan",
    },
    {
      id: 4,
      name: "ali",
      from: "uk",
    },
  ];

  function handle(e) {
    setSearch(e.target.value);

    const manu = data.filter((td, i) => {
      return td.from == search;
    });
    setSearch(manu);
  }

  return (
    <div>
      {data.map((store, index) => {
        return (
          <div key={index}>
            <select value={search} onChange={handle}>
              <option value="karachi">pakitan</option>
              <option value="india">india</option>
              <option value="japan">japan</option>
              <option value="uk">uk</option>
            </select>
            <Parent item={store} />
          </div>
        );
      })}
    </div>
  );
}
