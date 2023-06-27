
import './App.css';
import { useGlobalContext } from './Context';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';
import Footer from './components/Footer';

function App() {
  const {showModal, favorites}= useGlobalContext()
  return (
    <div className="App">
      
      <Search />
      {favorites.length >0 && <Favorites />}
      <Meals /> 
      {showModal && <Modal />}
      <Footer />
       
    </div>
  );
}

export default App;
