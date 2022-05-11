import React from 'react';
import './App.scss';
import 'bootstrap/dist/js/bootstrap.js';
import BmiCalculator from "./components/BmiCalculator/BmiCalculator";
import {Col} from "react-bootstrap";

function App() {
    return (
        <Col xs={10} sm={8} md={6} lg={5} xl={4} xxl={3} className="App mx-auto mt-4">
            <BmiCalculator/>
        </Col>
    );
}

export default App;
