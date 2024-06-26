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

const Cabecera = ({setFiltro})=>{
    return (
        <HeaderEstilizado>
            <img src="img/logo.png" alt="logo de Space app" />
            <CampoTexto setFiltro={setFiltro}/>
        </HeaderEstilizado>
    )
}

export default Cabecera