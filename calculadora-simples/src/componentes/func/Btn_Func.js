import React from "react";

export default function Btn_Func(props){

    //Funcoes
    const addDigito=(d)=>{
        if((d=='+'||d=='*'||d=='-'||d=='/') && props.operado){
            console.log("+-/*");
            props.setOperado(false);
            props.setValorTela(props.res+d);
            return
        }
        if(props.operado){
            props.setOperado(false);
            props.setValorTela(d);
            return
        }
        const valorDigitadoTela=props.valor+d;
        props.setValorTela(valorDigitadoTela);
    }

    const operacao=(oper)=>{
        if(oper=="bs"){
            let vTela=props.valor;
            vTela=vTela.substring(0,vTela.length-1);

            props.setValorTela(vTela);
            props.setOperado(false);
            return
        }
        try{
            const r=eval(props.valor); //CALCULO
            props.setAcumulador(r);
            props.setResultado(r);
            props.setOperado(true);
        }
        catch{
            props.setResultado('ERRO');
        }
    }

    const limparMemoria=()=>{
        props.setOperado(false);
        props.setValorTela('');
        props.setResultado(0);
        props.setAcumulador(0);
        return
    }

    //Style
    const styleBtn={
        fontSize:30,
        height:75,
        width:75,
        padding:20,
        backgroundColor:'#000',
        color:'#fff',
        borderColor:'#000',
        textAlign:'center',
        outline:'none'
    }
    const cssBtn={
        flexDirection:'row',
        flexWrap:'wrap'
    }

    return(
        <div style={cssBtn}>
            <button style={styleBtn} onClick={()=>limparMemoria()}>{'AC'}</button>
            <button style={styleBtn} onClick={()=>addDigito('(')}>{'('}</button>
            <button style={styleBtn} onClick={()=>addDigito(')')}>{')'}</button>
            <button style={styleBtn} onClick={()=>addDigito('/')}>{'/'}</button>
            <button style={styleBtn} onClick={()=>addDigito('7')}>{'7'}</button>
            <button style={styleBtn} onClick={()=>addDigito('8')}>{'8'}</button>
            <button style={styleBtn} onClick={()=>addDigito('9')}>{'9'}</button>
            <button style={styleBtn} onClick={()=>addDigito('*')}>{'*'}</button>
            <button style={styleBtn} onClick={()=>addDigito('4')}>{'4'}</button>
            <button style={styleBtn} onClick={()=>addDigito('5')}>{'5'}</button>
            <button style={styleBtn} onClick={()=>addDigito('6')}>{'6'}</button>
            <button style={styleBtn} onClick={()=>addDigito('-')}>{'-'}</button>
            <button style={styleBtn} onClick={()=>addDigito('1')}>{'1'}</button>
            <button style={styleBtn} onClick={()=>addDigito('2')}>{'2'}</button>
            <button style={styleBtn} onClick={()=>addDigito('3')}>{'3'}</button>
            <button style={styleBtn} onClick={()=>addDigito('+')}>{'+'}</button>
            <button style={styleBtn} onClick={()=>addDigito('0')}>{'0'}</button>
            <button style={styleBtn} onClick={()=>addDigito('.')}>{'.'}</button>
            <button style={styleBtn} onClick={()=>operacao('bs')}>{'<-'}</button>
            <button style={styleBtn} onClick={()=>operacao('=')}>{'='}</button>
        </div>
    )
}