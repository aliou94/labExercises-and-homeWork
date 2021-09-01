// class Component
class App extends React.Component { //

    // render method
    render() {
        return (
            <div className="test">
                <NavBar />
                <h1>Hello World!</h1>
                <Paragraph />
                <Footer />
            </div>
        )
    }
}

class Paragraph extends React.Component {
    render() {
        return (
            <p>
                <h3>ABC</h3>
                <span>asdfasdfasdf</span>
                <div>asdfsd</div>
            </p>
        )
    }
}

class NavBar extends React.Component {
    render() {
        return (
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Profile</li>
                <li>Other</li>
            </ul>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer>
                Footer
                <Paragraph />
            </footer>
        )
    }
}




// First argument: What we want to display (elements etc...)
// Second argument: Where we want to display it (root div container)

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)




