
// Function that capitalise's first letter of the Pokemon name
function capitalizeFirstLetter(str) {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export default function PokemonCard(props) {
    return (
        <h1>
            {capitalizeFirstLetter(props.name)}
        </h1>
    )
}