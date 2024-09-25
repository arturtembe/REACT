import React, { useState } from "react";
import TabelIMC_func from "./TabelIMC_func";
import Peso_Func from "./Peso_Func";
import Altura_Func from "./Altura_Func";
import Calcular_Func from "./Calcular_Func";
import Resultado_Func from "./Resultado_Func";

export default function IMC_Func(){
    
    const [peso,setPeso]=useState(0);
    const [altura,setAltura]=useState(0);
    const [resultado,setResultado]=useState(0);

    return(
        <div>
            <Peso_Func peso={peso} setPeso={setPeso}/>
            <Altura_Func altura={altura} setAltura={setAltura}/>
            <Calcular_Func peso={peso} altura={altura} setResultado={setResultado}/>
            <Resultado_Func resultado={resultado}/>
            <TabelIMC_func/>
        </div>
    )
}