import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import { useContext } from "react"
import { GlobalContext } from "../../Context/GlobalContext"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display:flex;
    justify-content:space-between;
    img{
        width:212px;
    }
    
`

const Cabecera = ()=>{

    return (
        <HeaderEstilizado>
            <img src="img/logo.png" alt="logo de Space app" />
            <CampoTexto/>
        </HeaderEstilizado>
    )
}

export default Cabecera