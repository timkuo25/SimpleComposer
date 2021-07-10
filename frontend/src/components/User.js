const User = ({setUser, send}) => {
    return (
        <div className="user">
            <label className="user-label">User: </label>
            <input placeholder="Enter user:" maxLength="20" className="user-input" onChange={(e) => {setUser(e.target.value)}}></input>
            <h2 className="button" onClick={send}>
                Send
            </h2>
        </div>
    )
}
  
export default User