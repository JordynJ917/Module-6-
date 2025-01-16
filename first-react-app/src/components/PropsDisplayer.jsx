function PropsDisplayer(props) {
    const stringProps = JSON.stringify

    return (
        <div className="PropsDisplayer componentBox">
            <h2>Check out my props</h2>
            <h3>{stringProps}</h3>
        </div>
    )
}

export default PropsDisplayer