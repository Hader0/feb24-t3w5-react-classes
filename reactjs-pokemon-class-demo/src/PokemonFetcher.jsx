import React from "react";
import PokemonCard from "./PokemonCard";

export default class PokemonFetched extends React.Component {

    constructor(props){
        // Super is React.Component
        super(props);

        this.state = {
            pokemonList: []
        }
    }

    // Runs automatically ONCE when the page first loads
    async componentDidMount() {

        for (let index = 0; index < 6; index++) {
            // Generate a random number for random Pokemon number
            let randomNumber = Math.floor(Math.random() * 1025) + 1;

            // Pass random Pokemon number into fetch request
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
            let data = await response.json();

            // Set fetch response data into state
            // this.setState({pokemonList: [...this.state.pokemonList, data]});
            this.setState((previousState) => {
                return {
                    pokemonList: [...previousState.pokemonList, data]
                }
            });
        }


            console.log("PokemonFetcher first load on the page.");
        }

        componentDidUpdate() {
            // If and else to cater to an empty state
            if (this.state.pokemonList.length > 0) {
                console.log("Page has rendered! The current state is: " + this.state.pokemonList);
            } else {
                console.log("Page has rendered! The current state is empty.");
            }
            
        }

    render() {
        return (
            <div>

                <h1>Pokemon Data</h1>

                {/* Mapping the Pokemon list in the state */}
                {this.state.pokemonList.map((pokemon, index) => {
                    return <PokemonCard key={pokemon.name + index} name={pokemon.name}/>
                })}

                {/* Button with onClick function for updating the state for the list */}
                <button onClick={() => {
                    this.setState({pokemonList: []});
                }}>Empty the state</button>

            </div>
        );
    }
}