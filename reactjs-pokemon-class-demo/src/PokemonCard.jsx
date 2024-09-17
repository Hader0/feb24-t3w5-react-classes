import React from "react";


// Function that capitalise's first letter of the Pokemon name
function capitalizeFirstLetter(str) {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export default class PokemonCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name
        }
    }

    componentWillUnmount() {
        console.log("Card for Pokemon is being unloaded: " + this.state.name);
    }

    render() {
        return (
            <h1>
                {capitalizeFirstLetter(this.state.name)}
            </h1>
        )
    }
}