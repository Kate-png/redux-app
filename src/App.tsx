import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [employees,setEmploees] = useState([])

  function getResEmployees() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => setEmploees(data))
  }

  useEffect(() => {
    getResEmployees()
  },[])

  return (
    <div> {employees.length > 0 && employees.map((element, index) => {
      return(
          <div key={index}>
              {element}
          </div>
          
      )
  })}
</div>
  );
}

export default App;
