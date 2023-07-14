import './App.css';
import {Employees} from "./views/EmployeesList/Employees";
import {Employee} from "./views/Employee/Employee";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PageHeader} from "./components/pageHeader/PageHeader";
import React from "react";

function App() {
    return (
        <div className="main">
            <PageHeader/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Employees/>}/>
                    <Route path="employee/:id" element={<Employee/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
