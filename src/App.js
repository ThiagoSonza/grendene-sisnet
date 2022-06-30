import { Route, Routes, useLocation } from 'react-router-dom';
import "./assets/css/App.css";
import "./assets/css/media-md.css";
import Aside from './components/Aside';
import AppProvider from './context/AppContext';
import Dash from "./pages/Dash";
import Login from "./pages/Login";

function App() {

    const location = useLocation();

    return (
        <AppProvider>
            <div className='app'>
                <section className='main'>
                    {!location.pathname.includes('login') &&
                        <Aside />
                    }

                    <Routes>
                        <Route path="/" element={<Dash />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<Dash />} />
                    </Routes>
                </section>
            </div>
        </AppProvider>
    );
}

export default App;
