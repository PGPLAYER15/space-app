import styled from "styled-components";
import GlobaStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/BarraLateral/Banner/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import { useEffect, useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Pie from "./components/Pie"
import Cargando from "./components/Cargando"

const FondoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1800px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDeGaleria, SetFotosDeGaleria] = useState([]);
  const [consulta, setConsulta] = useState('');
  const [FotoSeleccionada, SetFotoSeleccionada] = useState(null);

  const [filtro, setFiltro] = useState("");
  const [tag, SetTag] = useState(0);

  /* useEffect(()=>{
    const fotosFiltradas = .filter(foto =>{
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    SetFotosDeGaleria(fotosFiltradas)
  },[filtro, tag])
 */
  const alAlternarFavoritos = (foto) => {
    if (foto.id === FotoSeleccionada?.id) {
      SetFotoSeleccionada({
        ...FotoSeleccionada,
        favorita: !FotoSeleccionada.favorita,
      });
    }

    SetFotosDeGaleria(
      fotosDeGaleria.map((fotoDeGaleria) => {
        return {
          ...fotoDeGaleria,
          favorita:fotoDeGaleria.id === foto.id? !foto.favorita : fotoDeGaleria.favorita,
        };
      })
    );
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3000/fotos');
      const data = await res.json();
      SetFotosDeGaleria([...data]);
    }

    setTimeout(() => getData(), 5000);
  }, [])
  
  return (
    <>
      <FondoGradiente>
        <GlobaStyles />

        <AppContainer>
          <Cabecera setConsulta={setConsulta} textoConsulta={consulta} filtro={filtro} setFiltro={setFiltro} />

          <MainContainer>
            <BarraLateral />

            <ContenidoGaleria>
              <Banner
                texto={"La galería más completa de fotos del espacio"}
                backgroundImage={banner}
              />
              {
                fotosDeGaleria.length == 0 ? 
                <Cargando></Cargando> :
                <Galeria
                fotos={fotosDeGaleria}
                alSeleccionarFoto={(foto) => SetFotoSeleccionada(foto)}
                alAlternarFavoritos={alAlternarFavoritos}
                SetTag={SetTag}
                consulta={consulta}
              />
              }
              
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom
          foto={FotoSeleccionada}
          alcerrar={() => SetFotoSeleccionada(null)}
          alAlternarFavoritos={alAlternarFavoritos}
        />
        <Pie></Pie>
      </FondoGradiente>
    </>
  );
};

export default App;
