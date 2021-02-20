import React from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  function onChangeHandler(event) {
    let filteredPoke = pokemons;
    let inputText = event.target.value;
    inputText = inputText.toLowerCase().trim();

    if (inputText.length >= 1 && inputText !== "") {
      filteredPoke = filteredPoke.filter((poke) =>
        poke.name.includes(inputText)
      );
    }

    setState({ search: inputText, pokeState: filteredPoke });
  }
  const [valueState, setState] = React.useState({
    search: "",
    pokeState: pokemons
  });
  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <label>
        Name:
        <input
          type="text"
          value={valueState.search}
          onChange={onChangeHandler}
        />
      </label>
      <div className="cards">
        {valueState.pokeState &&
          valueState.pokeState.map((poke) => (
            <div>
              <CardItem name={poke.name} sprite={poke.sprite} />
            </div>
          ))}
      </div>
    </div>
  );
}
