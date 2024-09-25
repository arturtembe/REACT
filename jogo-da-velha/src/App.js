import React, { useState } from "react";

function App() {

  //Style
  const tabu={
    display:'flex',
    flexDirection:'column'
  }
  const tabuLinha={
    display:'flex',
    flexDirection:'row'
  }
  const casa={
    width:100,
    height:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    cursor:'pointer',
    fontSize:60,
    border:'1px solid #000'
  }

  const jogoInicial=[['','',''],['','',''],['','','']];

  const [jogo,setJogo]=useState([['','',''],['','',''],['','','']]);
  const [simbolActual,setSimbolActual]=useState('X');
  const [jogando,setJogando]=useState(true);

  const tabuleiro=(j)=>{

    return(
      <div style={tabu}>
        <div style={tabuLinha}>
          <div style={casa} data-pos="00" onClick={(e)=>joga(e)}>{j[0][0]}</div>
          <div style={casa} data-pos="01" onClick={(e)=>joga(e)}>{j[0][1]}</div>
          <div style={casa} data-pos="02" onClick={(e)=>joga(e)}>{j[0][2]}</div>
        </div>

        <div style={tabuLinha}>
          <div style={casa} data-pos="10" onClick={(e)=>joga(e)}>{j[1][0]}</div>
          <div style={casa} data-pos="11" onClick={(e)=>joga(e)}>{j[1][1]}</div>
          <div style={casa} data-pos="12" onClick={(e)=>joga(e)}>{j[1][2]}</div>
        </div>

        <div style={tabuLinha}>
          <div style={casa} data-pos="20" onClick={(e)=>joga(e)}>{j[2][0]}</div>
          <div style={casa} data-pos="21" onClick={(e)=>joga(e)}>{j[2][1]}</div>
          <div style={casa} data-pos="22" onClick={(e)=>joga(e)}>{j[2][2]}</div>
        </div>
      </div>);
  }

  const verificaVitoria=()=>{
    //Linhas
    let pontos=0;
    let vitoria=false;

    for(let l=0;l<3;l++){
      pontos=0;
      
      //Colunas
      for(let c=0;c<3;c++){
        if(jogo[l][c]==simbolActual){
          pontos++;
        }
      }
      if(pontos>=3){
        vitoria=true;
        break;
      }
    }

    //Colunnas
    for(let c=0;c<3;c++){
      pontos=0;

      //linhas
      for(let l=0;l<3;l++){
        if(jogo[l][c]==simbolActual){
          pontos++;
        }
      }
      if(pontos>=3){
        vitoria=true;
        break;
      }
    }

    //Diagonais
    pontos=0;
    for(let d=0;d<3;d++){
      if(jogo[d][d]==simbolActual){
          pontos++;
      }
    }
    if(pontos>=3){
      vitoria=true;
    }

    //
    pontos=0;
    let l=0;
    for(let c=0;c<3;c++){
      if(jogo[l][c]==simbolActual){
        pontos++;
      }
      l++;
    }
    if(pontos>=3){
      vitoria=true;
    }

    return vitoria;

  }

  const trocaJogador=()=>{
    simbolActual=='X'?setSimbolActual('O'):setSimbolActual('X');
  }

  const resPos=(e)=>{
    const p=e.target.getAttribute('data-pos');
    const pos=[parseInt(p.substring(0,1)),parseInt(p.substring(1,2))];

    return pos;
  }

  const verificaEspacoVazio=(e)=>{
    if(jogo[resPos(e)[0]][resPos(e)[1]]==''){
      return true
    }
    else{
      return false;
    }
  }

  const joga=(e)=>{
    if(jogando){
      if(verificaEspacoVazio(e)){
        jogo[resPos(e)[0]][resPos(e)[1]]=simbolActual;

        trocaJogador();
        
        if(verificaVitoria()){
          trocaJogador();

          alert(`Jogador  ${simbolActual} venceu!`);
          setJogando(false);
        }
        
      }
      else{
        alert('Este nao esta disponivel escolha o outro!')
      }
    }
  }

  const reniciar=()=>{
    setJogando(true);
    setJogo(jogoInicial);
    setSimbolActual('X');
  }

  const btnJogarNovamente=()=>{
    if(!jogando){
      return (<button onClick={()=>reniciar()}>Jogar Novamente</button>)
    }
  }

  return (
    <>
      <div>
        <p>Quem Joga: {simbolActual}</p>
      </div>
      <div>
        {tabuleiro(jogo)}
      </div>
      <div>{btnJogarNovamente()}</div>
    </>
  );
}

export default App;
