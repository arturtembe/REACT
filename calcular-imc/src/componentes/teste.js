/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

const TabelIMC=()=>{
  return(
    <table border="1" style={{ borderCollapse:'collapse' }}>
      <thead>
        <tr><th>Classificacao</th><th>IMC</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo do Peso</td>
          <td>Abaixo de 18,5</td>
        </tr>
        <tr>
          <td>Peso Normal</td>
          <td>Entre 18,5 e 24,9</td>
        </tr>
        <tr>
          <td>SobrePeso</td>
          <td>Entre 25 e 29,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau I</td>
          <td>Entre 30 a 34,9</td>
        </tr>
        <tr>
          <td>Obesisdade Grau II</td>
          <td>Entre 35 e 39,9</td>
        </tr>
        <tr>
          <td>Obesisdade Grau III ou Morbida</td>
          <td>Maior que 40</td>
        </tr>
      </tbody>
    </table>
  )
}

const fpeso=(peso,setPeso)=>{
  return(
    <div>
      <label>Peso
        <input type="text" value={peso} onChange={(e)=>setPeso(e.target.value)}/>
      </label>
    </div>
  )
}
const faltura=(altura,setAltura)=>{
  return(
    <div>
      <label>Altura
        <input type="text" value={altura} onChange={(e)=>setAltura(e.target.value)}/>
      </label>
    </div>
  )
}

const fcalcular=(peso,altura,setResultado)=>{
  const calc=()=>{
    setResultado(peso/(altura*altura))
  }
  return(
    <div>
      <button onClick={()=>calc()}>Calcular</button>
    </div>
  )
}
const fresultado=(resultado)=>{
  
  return(<p>Resultado: 
    {
    resultado.toFixed(2)//Numero de casas decimais
  }</p>)
}

function teste() {
  const [peso,setPeso]=useState(0);
  const [altura,setAltura]=useState(0);
  const [resultado,setResultado]=useState(0);

  return (
    <>
      {fpeso(peso,setPeso)}
      {faltura(altura,setAltura)}
      <br/>
      {fcalcular(peso,altura,setResultado)}
      <br/><br/>
      {fresultado(resultado)}
      <br/><br/>
      {TabelIMC()}
    </>
  );
}

export default teste;
