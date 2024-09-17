import React from "react";
import PokemonCard from "./PokemonCard";

export default class PokemonFetched extends React.Component {

    constructor(props){
        // Super is React.Component
        super(props);

        this.state = {
            pokemonList: ["Pikachu", "Squirtle", "Mewtwo"]
        }
    }

    render() {
        return (
            <div>

                <h1>Pokemon Data</h1>

                {/* Mapping the Pokemon list in the state */}
                {this.state.pokemonList.map(pokemon => {
                    return <PokemonCard name={pokemon}/>
                })}

                {/* Button with onClick function for updating the state for the list */}
                <button onClick={() => {
                    this.setState({pokemonList: []});
                }}>Empty the state</button>

            </div>
        );
    }
}