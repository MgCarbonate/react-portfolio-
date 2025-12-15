import './App.css';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>
      <Portfolio/>
      <About/>
    </div>
  );
}

export default App;