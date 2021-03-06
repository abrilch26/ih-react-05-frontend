//ESTADO GLOBAL AKA STORE

//La arquitectura que se utiliza para generar el estado global, se le conoce como FLUX
 import { useReducer } from "react"
 import GuitarContext from "./GuitarContext"
 import GuitarReducer from "./GuitarReducer"

 import axiosClient from "./../../config/axios"



 const GuitarState = (props) => {

    //1. INITIAL STATE (ESTADO INICIAL)
    const initialState = { //forzosamente debe de ser un objeto SIEMPRE
        guitars: [],
        hola:"holamundo"
    }

    //2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL
    //los reducers son funciones que alteran el estado global
    const [globalState, dispatch] = useReducer(GuitarReducer, initialState)

    //3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
    const changeText = () => {
        dispatch ({
            type: "CHANGE_TEXT",
            payload: "Estoy aprendiendo context y muriendo"
        })
    }

    const getGuitars = async () => {

        const res = await axiosClient.get("guitars/readall")
        console.log ("Obteniendo guitarras...")

        const list = res.data.data
        
        dispatch ({
            type: "GET_GUITARS",
            payload: list
        })
    }


    //4. RETORNO
    return (
        <GuitarContext.Provider
            value={{ //value baja el estado inicial a uno nuev0
                guitars: globalState.guitars,
                hola: globalState.hola,
                changeText,
                getGuitars
            }}
        >
            {props.children}
        </GuitarContext.Provider>
    )

}

export default GuitarState