import { useReducer } from "react"
import StoreContext from "./StoreContext"
import StoreReducer from "./StoreReducer"

const StoreState = (props) => {
    //1.INITIAL STATE
    const initialState = {
        stores: [],
        hello: "Tamo' bien"
    }

    //2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL
    const [globalState, dispatch] = useReducer(StoreReducer, initialState)

    //3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
    const changeText = () => {
        dispatch ({
            type: "CHANGE_TEXT",
            payload: "Auxilio, esto no es un meme"
        })
    }

    //4. RETORNO
    return (
        <StoreContext.Provider
            value={{
                stores: globalState.stores,
                hello: globalState.hello, 
                changeText
            }}

        >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreState