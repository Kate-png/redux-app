import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [employees,setEmploees] = useState([])

  function getResEmployees() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setEmploees(data))
  }

  useEffect(() => {
    console.log('привет');
    
    if (employees.length === 0){
      getResEmployees()
    }   
    return () => {
      console.log('пока');
      
    }
  },[])

  return (
    <div> {employees.length > 0 && employees.map((element:any, index) => {
      return(
          <div key={index}>
              {element.name}
          </div>
          
      )
  })}
</div>
  );
}

export default App;
