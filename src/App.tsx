import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Work from './Pages/Work';
import Detail from './Pages/Detail';
import NotFound from './Pages/NotFound';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/work' element={<Work />}/>
                <Route path='/detail/:id' element={<Detail />}/>
                <Route path='/*' element={<NotFound />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
