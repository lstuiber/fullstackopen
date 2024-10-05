
const Notification = ({errorMessage}) => {

    if (errorMessage === null) {
        return;
    }
    return (
        <div className="error-message">{errorMessage}</div>
    )
}

export default Notification;