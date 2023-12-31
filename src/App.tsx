import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Work from './Pages/Work';
import Detail from './Pages/Detail';
import NotFound from './Pages/NotFound';
import Footer from './Components/Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/work' element={<Work />}/>
                <Route path='/detail/:id' element={<Detail />}/>
                <Route path='/error' element={<NotFound />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
