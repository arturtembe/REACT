import React, { useState } from "react";
import Tela_Func from "./componentes/func/Tela_Func";
import Btn_Func from "./componentes/func/Btn_Func";

function App() {

  const [valorTela,setValorTela]=useState('');
  const [resultado,setResultado]=useState(0);
  const [acumulador,setAcumulador]=useState(0);
  const [operado,setOperado]=useState(false);

  //Style
  const styleConteiner={
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'column',
    width:300,
    border:'1px solid #000'
}

  return (
    <>
      <div style={styleConteiner}>
        <h3>Calculadora Matematico</h3>
        
        <Tela_Func valor={valorTela} res={resultado} 
        operado={operado} setOperado={setOperado} acumulador={acumulador}
        setResultado={setResultado} 
        setValorTela={setValorTela} 
        setAcumulador={setAcumulador}/>

        <Btn_Func valor={valorTela} res={resultado} 
        operado={operado} 
        acumulador={acumulador} setOperado={setOperado}
        setResultado={setResultado} 
        setValorTela={setValorTela} 
        setAcumulador={setAcumulador}/>
      </div>
    </>
  );
}

export default App;
