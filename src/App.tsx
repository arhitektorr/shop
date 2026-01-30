import './App.css';
import BestSellers from './components/BestSellers';
import { Header } from './components/Header';

function App() {
  return (
    <div className={'appContainer'}>
      <Header />
      <BestSellers />
    </div>
  );
}

export default App;
