import './App.css';
import Card from "./components/Card";

function App() {
    return (
        <div className="App">
            <h1>My Contacts</h1>
            <Card
                name="Beyonce"
                img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
                tel="+123 456 789"
                email="b@beyonce.com"
            />
            <Card
                name="Jack Bauer"
                img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
                tel="+738 738 587"
                email="jack@nowhere.com"
            />
        </div>
    );
}

export default App;
