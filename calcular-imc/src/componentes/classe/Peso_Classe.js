import React from "react";

export default class Peso_Classe extends React.Component{
    constructor(props){
        super(props);
    }

    pesoChng(e){
        this.props.setPeso(e.target.value)
        //console.log(e.target.value)
    }

    render(){
        return(
            <div>
                <label>Peso
                <input type="text" value={this.props.peso} onChange={(e)=>this.pesoChng(e)}/>
                </label>
            </div>
        )
    }
}