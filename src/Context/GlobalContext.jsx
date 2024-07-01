import { createContext,useState,useEffect, useReducer } from "react";

export const GlobalContext = createContext();


const initalState = {

    consulta:"",
    fotosDeGaleria: [],
    FotoSeleccionada: null,
    modalAbierto:false

}

const reducers = (state , action) =>{

  switch(action.type){
    case 'SET_CONSULTA':
      return {...state, consulta: action.payload};
    case 'SET_FOTOS_DE_GALERIA':
      return{...state, fotosDeGaleria: action.payload};
    case 'SET_FOTO_SELECCIONADA':
    return{...state, FotoSeleccionada: action.payload,
      modalAbierto:action.payload != null ? true : false

    };
    case 'ALTERNAR_FAVORITO':
      
        const fotosDeGaleria = state.fotosDeGaleria.map(fotoDeGaleria => {
          return {
            ...fotoDeGaleria,
            favorita:fotoDeGaleria.id === action.payload.id ? !action.payload.favorita : fotoDeGaleria.favorita,
          }
        });

        if(action.payload.id === state.FotoSeleccionada?.id){
            return{
              ...state,
              fotosDeGaleria: fotosDeGaleria,
              FotoSeleccionada: {
              ...state.FotoSeleccionada, favorita: !state.FotoSeleccionada.favorita,
            }
            
            
          }
        }else {
          return{
              ...state,fotosDeGaleria: fotosDeGaleria
                
          }
      }
      default:
        return state;
  
  
  }
}
const GlobalContextProvider = ({ children }) => {

  const [state , dispatch] = useReducer(reducers , initalState)

  /* const [consulta, setConsulta] = useState(""); */
 /*  const [FotoSeleccionada, SetFotoSeleccionada] = useState(null);
  const [fotosDeGaleria, SetFotosDeGaleria] = useState([]); */

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/fotos");
      const data = await res.json();
      dispatch({type: 'SET_FOTOS_DE_GALERIA', payload:data})
      /* SetFotosDeGaleria([...data]); */
    };

    setTimeout(() => getData(), 5000);
  }, []);

  return (
    <GlobalContext.Provider value={{
                                      state,
                                      dispatch
                                    }}>
      {children}
    </GlobalContext.Provider>
  );
};


export default GlobalContextProvider;
