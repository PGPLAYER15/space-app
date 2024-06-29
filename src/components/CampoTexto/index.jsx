import { useRef } from "react";
import styled from "styled-components";
import search from "./search.png";


const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const IconoLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px !important;
  height: 38px;
`;
const CampoTexto = ({ setConsulta , textoConsulta}) => {
  const cajaConsulta = useRef(textoConsulta);

  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado ref={cajaConsulta} type="text" placeholder="¿Qué estás buscando?" />
            <IconoLupa src={search} alt="ícono de lupa" onClick={() => {
                setConsulta(cajaConsulta.current.value)
            }} />
    </ContainerEstilizado>
  );
};

export default CampoTexto;
