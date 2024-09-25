import React from "react";

export default function Tela_Func(props){
    
    //Style
    const styleTela={
        display:'flex',
        paddingLeft:20,
        paddingRight:20,
        justifyContent:'center',
        alignItems:'flex-start',
        backgroundColor:'#444',
        flexDirection:'column',
        width:260
    }
    const styleOperacao={
        fontSize:25,
        color:'#fff',
        height:20
    }
    const styleRes={
        fontSize:50,
        color:'#fff'
    }
    
    return(
        <div style={styleTela}>
            <span style={styleOperacao}>{props.valor}</span>
            <span style={styleRes}>{props.res}</span>
        </div>
    )
}