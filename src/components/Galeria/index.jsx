import Titulo from "./TItulo";
import Tag from "./Tags";
import Populares from "./Populares";
import styled from "styled-components";
import Imagen from "./Imagen";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import Cargando from "../Cargando/index"

const GaleriaContainer = styled.div`
  display: flex;
`;

const SeccionFluida = styled.section`
  flex-grow: 1;
`;

const ImagenesContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = () => {
  
  //const {consulta,fotosDeGaleria,SetFotoSeleccionada,alAlternarFavoritos} = useContext(GlobalContext);
  
  const {state,dispatch}  = useContext(GlobalContext);
  

  return (
    state.fotosDeGaleria.length == 0 ? <Cargando></Cargando>:
    <>
      <Tag />
      <GaleriaContainer>
        <SeccionFluida>
          <Titulo> Navegue por la galería</Titulo>

          <ImagenesContainer>
            {state.fotosDeGaleria.filter(foto => {
                                return state.consulta == '' || foto.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
                                    .includes(state.consulta.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""))
                            })
                                .map(foto => <Imagen

                                    /* alAlternarFavorito={alAlternarFavoritos} */
                                    key={foto.id}
                                    foto={foto} />)
                            }
          </ImagenesContainer>
        </SeccionFluida>

        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
