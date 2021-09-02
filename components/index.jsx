function Header() {
    return (
        <div>
            <h1>Header should be below</h1>
        </div>
    )
}

ReactDOM.render(
    <Header />, 
    document.querySelector('#root')
)

//export default Header