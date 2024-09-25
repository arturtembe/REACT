import React from "react";

export default class Calcular_Classe extends React.Component{
    constructor(props){
        super(props);
    }
    calc=()=>{
        const res=this.props.peso/(this.props.altura*this.props.altura)
        this.props.setResultado(res)
    }
    
    render(){
        return(
            <div>
                <button onClick={()=>this.calc()}>Calcular</button>
            </div>
        )
    }
}