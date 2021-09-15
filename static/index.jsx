
//figure out how to import other components instead of just adding all components in this file
//import Header from "./Header";

function Header() {
    //we are writing in JavaScript
    const firstName = "Anne" //refer to these variables with {} below and {``} for space
    const lastName = "Bercilla"

    const date = new Date()
    const hours = date.getHours()
    let timeofDay

    //in-line styling: create JavaScript opbject for styling
    const styles = { 
        fontSize: 24
    }
             
    //can make styling dynamic by instantiating a styles object (above)
    /////and setting different attributes depending on time of day
    if (hours < 12) {
        timeofDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17){
        timeofDay = "afternoon"
        styles.color = "#2E0927"
    } else {
        timeofDay = "night"
        styles.color = "#D90000"
    }


    //now we are getting into JSX (fake HTML)
    return (
        <div>
            <h1 style = {styles}>What's good {`${firstName} ${lastName}`}</h1>
            <h2>It's {timeofDay}</h2>
        </div>
    )
}

ReactDOM.render(
    <Header />, 
    document.querySelector("#root")
)

//export default Header