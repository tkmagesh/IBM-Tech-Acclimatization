import React from "react"

function Greeter(){
    const [userName, setUserName] = React.useState('dummy')
    const [message, setMessage] = React.useState('')
    const onTxtUserNameChange = (evt) => {
        setUserName(evt.target.value)
    }
    const onBtnGreetClick = () => {
        const greetMsg = `Hi ${userName}, Have a nice day!`
        setMessage(greetMsg)
    }
    return (
        <div>
            <h1>Greeter</h1>
            <hr />
            <label htmlFor="">UserName :</label>
            <input type="text" onChange={onTxtUserNameChange} />
            <button onClick={onBtnGreetClick}>Greet</button>
            { message == '' ? null : <div>{message}</div> }
            {/* <div>The user name : {userName}</div> */}
        </div>
    )
}

export default Greeter