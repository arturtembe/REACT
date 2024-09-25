import React, { useState } from "react";
import TabelIMC_Classe from "./TabelIMC_Classe";
import Peso_Classe from "./Peso_Classe";
import Altura_Classe from "./Altura_Classe";
import Calcular_Classe from "./Calcular_Classe";
import Resultado_Classe from "./Resultado_Classe";

export default function IMC_Classe(){
    
    const [peso,setPeso]=useState(0);
    const [altura,setAltura]=useState(0);
    const [resultado,setResultado]=useState(0);
    
    return(
        <div>
            <Peso_Classe peso={peso} setPeso={setPeso}/>
            <Altura_Classe altura={altura} setAltura={setAltura}/>
            <Calcular_Classe peso={peso} altura={altura} setResultado={setResultado}/>
            <Resultado_Classe resultado={resultado}/>
            <TabelIMC_Classe/>
        </div>
    )
}