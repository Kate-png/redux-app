import React, {useEffect, useState} from "react";
import './style.css';
import {useParams} from "react-router-dom";
import {TEmployees} from "./type";
import {getResEmployee} from "../../requests/apiRequest";

export const Employee = () => {

    const [employee, setEmployee] = useState<TEmployees>()
    const paramsUrl = useParams<{ id: string }>()

    const url = `https://jsonplaceholder.typicode.com/users/${paramsUrl.id}`

    useEffect(() => {
        getResEmployee(setEmployee, url)
    }, [])

    return (
        <div>
            {employee &&
                <div className="employeeItem">
                    <li> name: {employee.name}</li>
                    <li> email: {employee.email}</li>
                    <li> phone: {employee.phone}</li>
                    <li> username: {employee.username}</li>
                    <li> website: {employee.website}</li>
                </div>
            }
        </div>
    )

}