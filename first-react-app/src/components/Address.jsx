function Address({Street, state = 'random', zipcode = '12345'}) {
    return (
        <div className="Address componentBox">
            <strong>{Street}</strong> is in {state}, {zipcode}
        </div>
    )
}
export default Address;