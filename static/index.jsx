
//figure out how to import other components instead of just adding all components in this file
//import Header from "./Header";

function Header() {
    //we are writing in JavaScript
    const firstName = "Anne"
    const lastName = "Bercilla"

    const date = new Date()
    const hours = date.getHours()
    let timeofDay

    if (hours < 12) {
        timeofDay = "morning"
    } else if (hours >= 12 && hours < 17){
        timeofDay = "afternoon"
    } else {
        timeofDay = "night"
    }


    //now we are getting into JSX (fake HTML)
    return (
        <div>
            <h1>What's good {`${firstName} ${lastName}`}</h1>
            <h2>It's {timeofDay}</h2>
        </div>
    )
}

ReactDOM.render(
    <Header />, 
    document.querySelector("#root")
)

//export default Header