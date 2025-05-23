import './App.css'
import './index.css'
import React from "react"
import AppRoutes from "./routes/AppRoutes.tsx";
import Header from "./component/Header.tsx";
import {BrowserRouter} from "react-router-dom";
import SelectedDateProvider from "./provider/SelectedDateProvider.tsx";

const App : React.FC = () => {

  return(
      <BrowserRouter>
        <SelectedDateProvider>
            <Header/>
            <AppRoutes/>
        </SelectedDateProvider>
      </BrowserRouter>
)
}

export default App
