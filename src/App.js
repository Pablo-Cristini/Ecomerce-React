import './App.css';
import './main.css'


import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nosotros from './componentes/Nosotros';



function App() {
    return( 
            <BrowserRouter>
                <Navbar />

                    <Routes>
                        <Route path='/' element={<ItemListContainer />} />
                        <Route path='/item/:id' element={<ItemDetailContainer />} />
                        <Route path='/nosotros' element={<Nosotros />} />
                    </Routes>

            </BrowserRouter>
    )
}

export default App;
