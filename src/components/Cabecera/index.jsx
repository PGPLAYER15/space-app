import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display:flex;
    justify-content:space-between;
    img{
        width:212px;
    }
    
`

const Cabecera = ({setConsulta,textoConsulta })=>{
    return (
        <HeaderEstilizado>
            <img src="img/logo.png" alt="logo de Space app" />
            <CampoTexto textoConsulta={textoConsulta} setConsulta={setConsulta}/>
        </HeaderEstilizado>
    )
}

export default Cabecera