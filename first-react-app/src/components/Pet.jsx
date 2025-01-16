function Pet(props) { // add this to a new file Pet.jsx in the components folder
    let type = 'unknown'; // set default value for type
    if (props.type) type = props.type;
    return (
        <div className="Pet componentBox">
            <h2>My Pet</h2> <p>Type: {type}</p>
            {props.name ? <p>Name: {props.name}</p> : null}
            {props.colour && <p>Colour: {props.colour}</p>}
        </div>
    )
}
    export default Pet;