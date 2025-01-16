function Greeting(props) {
    return (
        <div className="Greeting">
            <h2>Hello {props.name ? props.name : 'undefined'}</h2>
            {props.children}
        </div>  
    )
}

export default Greeting