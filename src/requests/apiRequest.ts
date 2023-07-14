import {TEmployees} from "../views/Employee/type";

export const getResEmployees = (setEmployees: React.Dispatch<React.SetStateAction<TEmployees[]>>) => {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setEmployees(data))
}

export const getResEmployee = (setEmployee: React.Dispatch<React.SetStateAction<TEmployees | undefined>>, url: string) => {

    fetch(url)
        .then(response => response.json())
        .then(data => setEmployee(data))
}

