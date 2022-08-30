
import './App.css';
import React, { useState } from "react";

function App() {
  const [gastos, setGastos] = useState([0])

  return (
    <>
      <div className='App__gastos'>
        <Contador gastos={gastos}/>
        <GastosMes gastos={gastos}/>
        <AgregarGasto setGastos = {setGastos} />
      </div>
      
    </>
  );
}

function Contador ({gastos}){
  return <div> Gasto mensual: {Suma({gastos})}</div>;
}

function Suma({gastos}){
  let sum = 0;
  for (let i = 0; i < gastos.length; i++) {
    sum += Number(gastos[i]);
  }
  return(sum);
}

function GastosMes ({gastos}){

return (
  <ul>
    {gastos.map ((gasto) =>( <li key = {gasto}>{gasto}</li>
    ))}
  </ul>
);
}

function AgregarGasto ({setGastos}) {
  function handleSubmit (event) {
    event.preventDefault ();
    const gasto = event.target.elements.gasto.value;
    setGastos(e => [...e, gasto])
  }

return (
  <form onSubmit = {handleSubmit}>
    <input type = "number" id = "gasto"/>
    <button type="Submit"> Agregar gasto </button>
  </form>
)
}

export default App;