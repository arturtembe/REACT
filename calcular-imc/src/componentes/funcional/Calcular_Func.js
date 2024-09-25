import React from "react";

export default function Calcular_Func(props){
    const calc=()=>{
        props.setResultado(props.peso/(props.altura*props.altura))
    }
    return(
        <div>
            <button onClick={()=>calc()}>Calcular</button>
        </div>
    )
}