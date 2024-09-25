import React from "react";

export default function Resultado_Func(props){
    return(
        <div>
            <br/>
                <p>Resultado: 
                    {
                    props.resultado.toFixed(2)//Numero de casas decimais
                }</p>
            <br/>
        </div>
    )
}