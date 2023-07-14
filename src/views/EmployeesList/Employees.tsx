import React, {useEffect, useState} from "react";
import './style.css';
import {TEmployees} from "../Employee/type";
import {getResEmployees} from "../../requests/apiRequest";

export const Employees = () => {
    const [employees, setEmployees] = useState<TEmployees[]>([])

    useEffect(() => {

        if (employees.length === 0) {
            getResEmployees(setEmployees)
        }
    }, [])

    return (
        <div className="employeeList">
            {employees.length > 0 && employees.map((element, index) => {
                const employeeUrl = `/employee/${index + 1}`
                return (
                    <ul key={index}>
                        <div
                            className="employeeList"
                        >
                            <a href={employeeUrl}>
                                {element.name}
                            </a>
                        </div>
                    </ul>
                )
            })}
        </div>
    );
}