import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [temperature, setTemperature] = useState(0)
    const [matterState, setMatterState] = useState("")

    const handleChange = (event) => {
        setTemperature(event.target.value)
        console.log(event)
    }

    useEffect(() => {
        if (temperature <= 0)
            setMatterState("stały")
        else if (temperature >= 100)
            setMatterState("gazowy")
        else
            setMatterState("ciekły")
    }, [temperature])

    return (
        <div className="temperature">
            <input
                type="text"
                onChange={handleChange}
                value={temperature}
                placeholder="Wprowadź temperaturę wody"
            />
            <div className={matterState}>
                <p>
                    W temperaturze {temperature} °C, woda jest w stanie
                    <span> {matterState}m.</span>
                </p>
            </div>
        </div>
    );
}

export default App;
