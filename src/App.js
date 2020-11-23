import React, {useReducer, createContext, useEffect} from 'react'
import logo from './logo.svg';
import './styles/tailwind.output.css';
import './styles/style.scss'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginComp from './components/page/LoginComp';
import RegisterComp from './components/page/RegisterComp';
import DashboardComp from './components/page/DashboardComp';



//Data Global
export const AuthContext = createContext()

//Inisiasi state
const initialState = {
  isAuthenticated: (localStorage.getItem("token") ? true : false),
  username: null,
  token: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      //Menyimpan data di localstorage
      localStorage.setItem("username", JSON.stringify(action.payload.username))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        token: action.payload.token
      }

    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        username: null,
      }

      
  
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="bg-gradient-to-tr from-teal-100 to-teal-300 h-full">
      <BrowserRouter>
        <Switch>
          <AuthContext.Provider value={{
              state,
              dispatch
            }}>

            <Route exact path="/" component={LoginComp}/>
            <Route path="/dashboard" component={DashboardComp}/>
            <Route exact path="/register" component={RegisterComp}/>


          </AuthContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
