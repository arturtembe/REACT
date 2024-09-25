import React from "react";

export default class Resultado_Classe extends React.Component{
    
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <br/>
                    <p>Resultado: 
                        {
                        this.props.resultado.toFixed(2)//Numero de casas decimais
                    }</p>
                <br/>
            </div>
        )
    }
}